import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

export default function Attending({ attending, classes }) {
  const event = useSelector((state) => state.focusedEventInfo);
  return (
    <div className={classes.attendingContainer}>
      <Typography variant="h6">Attending:</Typography>
      {Object.keys(event).length > 0 && (
        <AvatarGroup max={5}>
          {event.attending.slice(0, event.attending.length >= 4 ? 4 : event.attending.length).map((user) => {
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
          {event.attending.length > 4 && (
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
              <Typography style={{ paddingRight: '2%' }}>+{attending.length - 4}</Typography>
            </Avatar>
          )}
          {event.attending.length === 0 && (
            <Typography variant="h6" style={{ border: 'none', fontSize: '90%' }}>
              No one has confirmed they are going to this event.
            </Typography>
          )}
          );
        </AvatarGroup>
      )}
    </div>
  );
}
