import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './view-event-related-user-modal.styles';
import { toggleModal } from '../../utilities/actions';

export default function ViewEventRelatedUsersModal() {
  const classes = styles();
  const focusedEventInfo = useSelector((state) => state.focusedEventInfo);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className={classes.container}>
          {focusedEventInfo.attending && (
            <div className={classes.avatarContainer}>
              <Typography variant="h6">Attending</Typography>
              <AvatarGroup>
                {focusedEventInfo.attending.map((user) => {
                  return (
                    <Link
                      to={`/profile/${user.id}`}
                      style={{ border: 'none', background: 'transparent', overflow: 'hidden' }}
                    >
                      <Avatar
                        key={user.id}
                        title={`${user.firstName} ${user.lastName}`}
                        aria-label="avatar"
                        style={{
                          cursor: 'pointer',
                          border: '1px solid white',
                          background: '#DCDCDC',
                        }}
                        src={user.photo ? user.photo : ''}
                      >
                        {!user.photo && (
                          <Typography style={{ paddingRight: '2%' }}>{`${user.firstName
                            .split('')[0]
                            .toUpperCase()}${user.lastName.split('')[0].toUpperCase()}`}</Typography>
                        )}
                      </Avatar>
                    </Link>
                  );
                })}
                {focusedEventInfo.attending.length === 0 && (
                  <Typography
                    variant="h6"
                    style={{ border: 'none', fontSize: '90%', maxWidth: '180px', textAlign: 'left' }}
                  >
                    No one has confirmed they are going to this event.
                  </Typography>
                )}
                ;
              </AvatarGroup>
            </div>
          )}
          {focusedEventInfo.invited && (
            <div className={classes.avatarContainer}>
              <Typography variant="h6">Invited</Typography>
              <AvatarGroup>
                {focusedEventInfo.invited.map((user) => {
                  return (
                    <Link
                      to={`/profile/${user.id}`}
                      style={{ border: 'none', background: 'transparent', overflow: 'hidden' }}
                    >
                      <Avatar
                        key={user.id}
                        title={`${user.firstName} ${user.lastName}`}
                        aria-label="avatar"
                        style={{
                          cursor: 'pointer',
                          border: '1px solid white',
                          background: '#DCDCDC',
                        }}
                        src={user.photo ? user.photo : ''}
                      >
                        {!user.photo && (
                          <Typography style={{ paddingRight: '2%' }}>{`${user.firstName
                            .split('')[0]
                            .toUpperCase()}${user.lastName.split('')[0].toUpperCase()}`}</Typography>
                        )}
                      </Avatar>
                    </Link>
                  );
                })}
                {focusedEventInfo.invited.length === 0 && (
                  <Typography
                    variant="h6"
                    style={{ border: 'none', fontSize: '90%', maxWidth: '180px', textAlign: 'left' }}
                  >
                    No one has been invited to this event.
                  </Typography>
                )}
                ;
              </AvatarGroup>
            </div>
          )}
          {focusedEventInfo.maybeGoing && (
            <div className={classes.avatarContainer}>
              <Typography variant="h6">Maybe Going</Typography>
              <AvatarGroup>
                {focusedEventInfo.maybeGoing.map((user) => {
                  return (
                    <Link
                      to={`/profile/${user.id}`}
                      style={{ border: 'none', background: 'transparent', overflow: 'hidden' }}
                    >
                      <Avatar
                        key={user.id}
                        title={`${user.firstName} ${user.lastName}`}
                        aria-label="avatar"
                        style={{
                          cursor: 'pointer',
                          border: '1px solid white',
                          background: '#DCDCDC',
                        }}
                        src={user.photo ? user.photo : ''}
                      >
                        {!user.photo && (
                          <Typography style={{ paddingRight: '2%' }}>{`${user.firstName
                            .split('')[0]
                            .toUpperCase()}${user.lastName.split('')[0].toUpperCase()}`}</Typography>
                        )}
                      </Avatar>
                    </Link>
                  );
                })}
                {focusedEventInfo.maybeGoing.length === 0 && (
                  <Typography
                    variant="h6"
                    style={{ border: 'none', fontSize: '90%', maxWidth: '180px', textAlign: 'left' }}
                  >
                    No one has been invited to this event.
                  </Typography>
                )}
                ;
              </AvatarGroup>
            </div>
          )}
          <Typography variant="h6" onClick={() => dispatch(toggleModal())} style={{ cursor: 'pointer' }}>
            Close
          </Typography>
        </div>
      </div>
      <div>
        <div className={classes.overlay} />
      </div>
    </>
  );
}
