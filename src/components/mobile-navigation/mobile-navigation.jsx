import React from 'react';
import SidebarButton from '../shared/grid-structure/sidebar/sidebar-button/SidebarButton';

import houseDoor from '@iconify/icons-bi/house-door';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import calendarPlus from '@iconify/icons-mdi/calendar-plus';
import settingsIcon from '@iconify-icons/bytesize/settings';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { styles } from "./mobile-navigation.styles.js";
 
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

export default function MobileNavigation(props) {

    const user = useSelector(state => state.user); 
    const { push } = useHistory();

    const classes = styles();

    return (
        <div className={classes.container}>
         {Object.keys(user).length > 0 && (
            <div className="avatar">
                <Avatar
                aria-label="avatar"
                src={!user.photo ? null : user.photo}
                onClick={() => push(`/profile/${user.id}`)}
                >
                {!user.photo && (
                    <Typography>{`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}</Typography>
                )}
                </Avatar>
            </div>
          )}
            <div>
               <nav>
                    {buttonList.map((ele) => {
                        return <SidebarButton {...ele} active={true} key={ele.text} />;
                    })}
                </nav>
             </div>
        </div>
    )
}