import React from 'react';
import { axiosWithAuth } from '../../../../../../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { useSelector } from 'react-redux';
import { cardStyles, buttonStyles } from '../../../../../../../styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import checkmarkIcon from '@iconify/icons-gridicons/checkmark';
import { Icon } from '@iconify/react';
import { styles } from './userCard.styles.js';

import { INVITE_USER, REMOVE_INVITATION } from '../../../../../../../graphql/events/event-mutations.js';

const UserCard = ({ user, setAlreadyInvited, event_id, invited }) => {
  const buttonClasses = buttonStyles();
  const cardClasses = cardStyles();
  const classes = styles();
  const currentUserId = useSelector((state) => state.user.id);

  const inviteUser = () => {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(INVITE_USER),
        variables: {
          inviteInput: {
            event_id: Number(event_id),
            inviter_id: Number(currentUserId),
            user_id: Number(user.id),
          },
        },
      })
      .then((res) => {
        setAlreadyInvited((alreadyInvited) => [...alreadyInvited, user.id]);
      })
      .catch((err) => console.dir(err));
  };

  const removeInvite = () => {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(REMOVE_INVITATION),
        variables: {
          inviteInput: {
            event_id: Number(event_id),
            inviter_id: Number(currentUserId),
            user_id: Number(user.id),
          },
        },
      })
      .then((res) => {
        setAlreadyInvited((alreadyInvited) => alreadyInvited.filter((id) => id !== user.id));
      })
      .catch((err) => console.dir(err));
  };
  return (
    <div className={classes.root} key={user.id}>
      <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
        <Avatar
          aria-label="avatar"
          className={cardClasses.avatarNoHover}
          src={!user.photo ? null : user.photo}
        >
          {!user.photo && (
            <Typography>{`${user.firstName.split('')[0].toUpperCase()}${user.lastName
              .split('')[0]
              .toUpperCase()}`}</Typography>
          )}
        </Avatar>

        <div className={classes.textContainer}>
          <div>
            <p>
              {user.firstName}&nbsp;{user.lastName}
            </p>
          </div>
          <p
            style={{
              color: '#000000',
              opacity: '0.3',
            }}
          >
            {user.email.length > 27 ? user.email.slice(0, 27) + '...' : user.email}
          </p>
        </div>
      </div>
      <div style={{ width: '50px' }}>{/* Not Invited */}</div>
      <div className={classes.iconContainer}>
        <IconButton
          className={`${buttonClasses.icon} ${invited ? buttonClasses.iconGreen : ''}`}
          onClick={() => (invited ? removeInvite() : inviteUser())}
        >
          {invited ? (
            <Icon
              icon={checkmarkIcon}
              style={{
                fontSize: '3.5rem',
                color: 'white',
                fontWeight: 'bold',
              }}
            />
          ) : (
            <Typography variant="h5">+</Typography>
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default UserCard;
