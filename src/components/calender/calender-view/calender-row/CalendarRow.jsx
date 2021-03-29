import React, { useEffect, useState } from 'react';
import { parseTime } from '../../../../utilities/functions';
import Typography from '@material-ui/core/Typography';
import { calendarStyles } from '../../Calendar.styles';
import EventPopup from '../event-popup/EventPopup';

const CalendarRow = (props) => {
  const styles = calendarStyles();
  const timeObject = parseTime(props.event.startTime, null);
  const [showEvent, setShowEvent] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    if (windowWidth >= 1280) setShowEvent(false);
    else if (windowWidth < 1280 && props.selectedEvent) setShowEvent(true);
    return () => window.removeEventListener('resize', resizeWindow);
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        className={`${styles.calendarRow} 
            ${props.selectedEvent.id === props.event.id && styles.calendarRowActive}`}
        onClick={() => {
          if (windowWidth < 1280) setShowEvent(true);
          else setShowEvent(false);
          props.setSelectedEvent(props.event);
        }}
      >
        <div style={{ width: '15%' }}>
          <Typography color="textSecondary">{timeObject.weekday}</Typography>
          <Typography variant="h4">{timeObject.day}</Typography>
        </div>
        <div
          style={{
            borderLeft: '1px solid rgba(0,0,0,.1)',
            paddingLeft: '20px',
            width: '65%',
          }}
        >
          <Typography color="textSecondary">
            {props.event.title.length < 25 ? props.event.title : `${props.event.title.slice(0, 25)}...`}
          </Typography>
          <div>
            <Typography
              variant="caption"
              component="span"
              style={
                props.event.status === 'NOT_GOING'
                  ? { color: 'rgba(232, 64, 64, .75)' }
                  : props.event.status === 'MAYBE_GOING'
                  ? { color: 'rgba(255, 169, 40, .75)' }
                  : props.event.status === 'GOING'
                  ? { color: 'rgba(33, 186, 66, .75)' }
                  : { color: 'rgba(0,0,0, .3)' }
              }
            >
              {props.event.status === 'GOING'
                ? 'Going'
                : props.event.status === 'NOT_GOING'
                ? 'Not Going'
                : props.event.status === 'MAYBE_GOING'
                ? 'Maybe Going'
                : 'undecided'}
            </Typography>
          </div>
        </div>
        <Typography variant="caption" color="textSecondary">
          {timeObject.startTime}
        </Typography>
      </div>
      {showEvent && props.selectedEvent.id === props.event.id && (
        <EventPopup selectedEvent={props.selectedEvent} />
      )}
    </div>
  );
};

export default CalendarRow;
