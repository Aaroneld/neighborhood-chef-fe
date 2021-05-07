import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { cardStyles } from '../../../../../../styles';

const Participants = ({ users }) => {
  const classes = cardStyles();

  return (
    <div>
      {users.length > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '3%',
          }}
        >
          <AvatarGroup max={5}>
            {users.slice(0, users.length >= 4 ? 4 : users.length).map((user) => {
              return (
                <Link
                  key={user.id}
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
                      <Typography style={{ fontSize: '130%', paddingRight: '2%' }}>{`${user.firstName
                        .split('')[0]
                        .toUpperCase()}${user.lastName.split('')[0].toUpperCase()}`}</Typography>
                    )}
                  </Avatar>
                </Link>
              );
            })}
            {users.length > 4 && (
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
                <Typography style={{ fontSize: '130%', paddingRight: '2%' }}>+{users.length - 4}</Typography>
              </Avatar>
            )}
            );
          </AvatarGroup>
          <div className={classes.participantText}>
            {users.length} {users.length === 1 ? 'neighbor' : 'neighbors'} going
          </div>
        </div>
      )}
      {users.length === 0 && <div style={{ margin: '4% 0' }}>Confirmed Attending: {users.length}</div>}
    </div>
  );
};

export default Participants;
