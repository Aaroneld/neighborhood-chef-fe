import React from 'react';
import { useSelector } from 'react-redux';

//icons imports
import houseDoor from '@iconify/icons-bi/house-door';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import calendarPlus from '@iconify/icons-mdi/calendar-plus';
import userAvatar from '@iconify-icons/carbon/user-avatar';

//component import
import SidebarButton from './sidebar-button/SidebarButton';

import { styles } from './sidebar.style';

const buttonList = [
  {
    active: false,
    link: 'dashboard',
    text: 'My Neighborhood',
    icon: houseDoor,
  },
  {
    active: false,
    link: 'view-events',
    text: 'Calendar',
    icon: calendarOutlined,
  },
  {
    active: false,
    link: 'create-event',
    text: 'Create Event',
    icon: calendarPlus,
  },
  {
    active: false,
    link: null,
    text: 'Profile',
    icon: userAvatar,
  },
];

const Sidebar = ({ active }) => {
  const profileLink = `profile/${useSelector((state) => state.user.id)}`;
  const classnames = styles();
  return (
    <div className={classnames.container}>
      <div>
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
          }}
        >
          {buttonList.map((ele) => {
            if (ele.text === 'Profile') ele.link = profileLink;
            return <SidebarButton {...ele} active={active === ele.link} key={ele.text} />;
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
