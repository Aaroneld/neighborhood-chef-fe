import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { updateFocusedEventInfo } from '../../../../utilities/actions';
import { buttonStyles } from '../../../../styles';
import { changeStatusForSingleEvent } from '../../../../utilities/actions';

const StatusButton = ({ status, color, currStatus, eventId, userId, changeStatusForSingleEvent, event }) => {
  const classes = buttonStyles();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <button
      className={classes.rsvpRoot}
      style={{
        filter: status === currStatus ? 'none' : 'brightness(80%)',
        background: color,
      }}
      onClick={async (e) => {
        e.preventDefault();
        console.log(status);
        if (currStatus !== status) {
          changeStatusForSingleEvent({
            status,
            eventId,
            userId,
          });
          if (event && Object.keys(event).length > 0) {
            if (status === 'GOING') {
              dispatch(
                updateFocusedEventInfo({
                  ...event,
                  attending: [...event.attending, user],
                  maybeGoing: event.maybeGoing.filter((u) => u.id !== user.id),
                })
              );
            } else if (status === 'NOT_GOING') {
              dispatch(
                updateFocusedEventInfo({
                  ...event,
                  attending: event.attending.filter((u) => u.id !== user.id),
                  maybeGoing: event.maybeGoing.filter((u) => u.id !== user.id),
                })
              );
            } else {
              dispatch(
                updateFocusedEventInfo({
                  ...event,
                  attending: event.attending.filter((u) => u.id !== user.id),
                  maybeGoing: [...event.maybeGoing, user],
                })
              );
            }
          }
        }
      }}
    >
      {status === 'GOING' ? 'Yes' : status === 'NOT_GOING' ? 'No' : 'Maybe'}
    </button>
  );
};

export default connect(null, { changeStatusForSingleEvent })(StatusButton);
