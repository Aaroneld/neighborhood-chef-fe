import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React from 'react';

import { Link } from 'react-router-dom';

export default function Attending({ attending, classes }) {
  return (
    <div className={classes.attendingContainer}>
      <Typography variant="h6">Attending:</Typography>
      <AvatarGroup max={5}>
        {attending.slice(0, attending.length >= 4 ? 4 : attending.length).map((user) => {
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
                src={user.photo ? null : user.photo}
              >
                {!user.photo && (
                  <Typography style={{ paddingRight: '2%' }}>{`${user.firstName.split('')[0]}${
                    user.lastName.split('')[0]
                  }`}</Typography>
                )}
              </Avatar>
            </Link>
          );
        })}
        {attending.length > 4 && (
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
        );
      </AvatarGroup>
    </div>
  );
}
