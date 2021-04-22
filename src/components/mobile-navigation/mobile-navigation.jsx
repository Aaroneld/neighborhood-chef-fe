import React, { useEffect } from 'react';
import SidebarButton from '../shared/grid-structure/sidebar/sidebar-button/SidebarButton';

import houseDoor from '@iconify/icons-bi/house-door';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import calendarPlus from '@iconify/icons-mdi/calendar-plus';
import settingsIcon from '@iconify-icons/bytesize/settings';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { styles } from './mobile-navigation.styles.js';

import ls from 'local-storage';
import jwt from 'jwt-decode';
import { USER_BY_EMAIL } from '../../graphql/users/user-queries';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { saveUser } from '../../utilities/actions';
import { logout } from '../../utilities/functions';

import Button from '@material-ui/core/Button';

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
  const user = useSelector((state) => state.user);
  const { push } = useHistory();
  const dispatch = useDispatch();
  const classes = styles();

  useEffect(() => {
    if (ls.get('access_token')) {
      const token = ls.get('access_token');
      const decodedToken = jwt(token).sub;
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: 'post',
        data: {
          query: print(USER_BY_EMAIL),
          variables: {
            queryParams: { email: decodedToken },
            mileRadius: 10,
          },
        },
      })
        .then((res) => {
          dispatch(saveUser(res.data.data.Users[0]));
        })
        .catch((err) => {
          console.log(err);
          console.dir(err);
        });
    }
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <h1>Navigation</h1>
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
      <Button id="nav-logout" onClick={() => logout(push, '/')}>
        Logout
      </Button>
    </div>
  );
}
