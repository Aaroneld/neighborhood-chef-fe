import { Avatar, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import React from 'react';
import { styles } from './view-event-related-user-modal.styles';

export default function ViewEventRelatedUsersModal({ eventUsers }) {
  const classes = styles();

  return (
    <>
      <div>
        <div className={classes.container}>
          {eventUsers.attending && (
            <div>
              <Typography variant="h6">Attending</Typography>
              <AvatarGroup max={5}>
                {eventUsers.attending.map((user) => {
                  return (
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
                  );
                })}
                {eventUsers.attending.length > 4 && (
                  <Avatar
                    key={'count'}
                    title={'count'}
                    aria-label="avatar"
                    style={{
                      cursor: 'pointer',
                      border: '1px solid white',
                      background: '#DCDCDC',
                    }}
                  >
                    <Typography style={{ paddingRight: '2%' }}>+{eventUsers.attending.length - 4}</Typography>
                  </Avatar>
                )}
                {eventUsers.attending.length === 0 && (
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
          {eventUsers.invited && (
            <div>
              <Typography variant="h6">Invited</Typography>
              <AvatarGroup max={5}>
                {eventUsers.invited.map((user) => {
                  return (
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
                  );
                })}
                {eventUsers.invited.length > 4 && (
                  <Avatar
                    key={'count'}
                    title={'count'}
                    aria-label="avatar"
                    style={{
                      cursor: 'pointer',
                      border: '1px solid white',
                      background: '#DCDCDC',
                    }}
                  >
                    <Typography style={{ paddingRight: '2%' }}>+{eventUsers.invited.length - 4}</Typography>
                  </Avatar>
                )}
                {eventUsers.invited.length === 0 && (
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
        </div>
      </div>
      <div>
        <div className={classes.overlay} />
      </div>
    </>
  );
}
