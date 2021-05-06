import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { updateFocusedEventInfo } from '../../../../utilities/actions';
import { buttonStyles } from '../../../../styles';
import { changeStatusForSingleEvent } from '../../../../utilities/actions';

const StatusButton = ({
  status,
  color,
  currStatus,
  eventId,
  userId,
  changeStatusForSingleEvent,
  attending,
  setAttending,
  event,
}) => {
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
        if (currStatus !== status) {
          changeStatusForSingleEvent({
            status,
            eventId,
            userId,
          });

          if (attending && setAttending) {
            const updatedAttendingList = attending.filter((user) => user.id !== userId);

            if (status === 'GOING') {
              updatedAttendingList.push(user);
            }
            setAttending(updatedAttendingList);
          }
        }

        if (event && Object.keys(event).length > 0) {
          if (status === 'GOING') {
            dispatch(
              updateFocusedEventInfo({
                ...event,
                attending: [...event.attending, user],
              })
            );
          } else {
            dispatch(
              updateFocusedEventInfo({
                ...event,
                attending: event.attending.filter((u) => u.id !== user.id),
              })
            );
          }
        }
      }}
    >
      {status === 'GOING' ? 'Yes' : status === 'NOT_GOING' ? 'No' : 'Maybe'}
    </button>
  );
};

export default connect(null, { changeStatusForSingleEvent })(StatusButton);
