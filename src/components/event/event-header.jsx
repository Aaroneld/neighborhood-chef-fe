import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { styles } from './event-header.styles.js';
import { cardStyles } from '../../styles';
import AttendingButtons from './event-details/attending-buttons/attending-buttons';

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import { pickRandomColor } from '../../utilities/functions';

export default function EventHeader() {
  const eventInfo = useSelector((state) => state.focusedEventInfo);
  const classes = styles();
  const statusButtonClasses = cardStyles();

  const testAvatar = [
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
  ];

  return (
    <>
      <div className={classes.attendingContainer}>
        <Typography variant="h6">Attending:</Typography>
        <AvatarGroup max={5}>
          {testAvatar.slice(0, testAvatar.length >= 4 ? 4 : testAvatar.length).map((user) => {
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
                    <Typography style={{ fontSize: '130%', paddingRight: '2%' }}>{`${
                      user.firstName.split('')[0]
                    }${user.lastName.split('')[0]}`}</Typography>
                  )}
                </Avatar>
              </Link>
            );
          })}
          {testAvatar.length > 4 && (
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
              <Typography style={{ fontSize: '130%', paddingRight: '2%' }}>
                +{testAvatar.length - 4}
              </Typography>
            </Avatar>
          )}
          );
        </AvatarGroup>
      </div>
      <div className={classes.container}>
        {eventInfo && (
          <>
            <Typography variant="h2">{eventInfo.title}</Typography>
            <Typography>
              <span>Created by: </span>
              <Link
                to={`/profile/${eventInfo.eventuser.id}`}
              >{`${eventInfo.eventuser.firstName} ${eventInfo.eventuser.lastName}`}</Link>
            </Typography>
            <AttendingButtons classes={statusButtonClasses} event={eventInfo} />
          </>
        )}
      </div>
    </>
  );
}
