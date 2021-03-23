import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

//component imports
import CalendarRow from './calender-row/CalendarRow';

//style import
import { buttonStyles } from '../../../styles';

import { parseTime } from '../../../utilities/functions';

import { calendarStyles } from '../Calendar.styles';

const CalendarView = ({ eventList, setSelectedEvent, selectedEvent }) => {
  const selectedMonth = useSelector((state) => state.selectedMonth);
  const classes = buttonStyles();
  const styles = calendarStyles();

  const eventsInMonth =
    eventList &&
    eventList.filter((ev) => {
      const parsedTime = parseTime(ev.startTime, ev.endTime);
      const eventMonth = parsedTime.monthYear;
      return eventMonth === moment(selectedMonth).format('MMM YYYY');
    });

  return (
    <div>
      <div className={styles.calendarViewMain}>
        {!!eventsInMonth && eventsInMonth.length > 0 ? (
          eventsInMonth
            .sort((a, b) => a.startTime - b.startTime)
            .map((event, eventNum) => (
              <CalendarRow
                event={event}
                key={event.id}
                eventNum={eventNum}
                selectedEvent={selectedEvent}
                setSelectedEvent={setSelectedEvent}
              />
            ))
        ) : (
          <div>
            <h3>No events for selected month</h3>
            <p>But it doesn't have to stay that way.</p>
            <Link to="/create-event">
              <div className={`${classes.single} ${classes.root}`}>Create New Event</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
