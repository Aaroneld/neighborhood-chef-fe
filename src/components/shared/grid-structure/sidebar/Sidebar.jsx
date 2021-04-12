import React from 'react';

//icons imports
import houseDoor from '@iconify/icons-bi/house-door';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import calendarPlus from '@iconify/icons-mdi/calendar-plus';
import settingsIcon from '@iconify-icons/bytesize/settings';

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
    link: 'settings',
    text: 'Settings',
    icon: settingsIcon,
  },
];

const Sidebar = ({ active }) => {
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
            return <SidebarButton {...ele} active={active === ele.link} key={ele.text} />;
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
