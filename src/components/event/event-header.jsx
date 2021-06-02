import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { styles } from './event-header.styles.js';
import { cardStyles } from '../../styles';
import AttendingButtons from './event-details/attending-buttons/attending-buttons';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { toggleModal } from '../../utilities/actions';

export default function EventHeader() {
  const eventInfo = useSelector((state) => state.focusedEventInfo);
  const classes = styles();
  const statusButtonClasses = cardStyles();
  const dispatch = useDispatch();

  return (
    <div>
      {eventInfo && eventInfo.attending && (
        <div className={classes.attendingContainer} onClick={() => dispatch(toggleModal())}>
          <Typography variant="h6">Attending:</Typography>
          <AvatarGroup max={5}>
            {eventInfo.attending
              .slice(0, eventInfo.attending.length >= 4 ? 4 : eventInfo.attending.length)
              .map((user) => {
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
            {eventInfo.attending.length > 4 && (
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
                <Typography style={{ paddingRight: '2%' }}>+{eventInfo.attending.length - 4}</Typography>
              </Avatar>
            )}
            {eventInfo.attending.length === 0 && (
              <Typography
                variant="h6"
                style={{ border: 'none', fontSize: '90%', maxWidth: '180px', textAlign: 'left' }}
              >
                No one has confirmed they are going to this event.
              </Typography>
            )}
            );
          </AvatarGroup>
        </div>
      )}
      <div className={classes.container}>
        {Object.keys(eventInfo).length > 0 && (
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
    </div>
  );
}
