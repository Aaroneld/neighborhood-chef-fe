import React from 'react';
import Typography from '@material-ui/core/Typography';
import EventCard from './event-card/EventCard';

const RightSide = ({ events, setEvents, userFirstName }) => {
  return (
    <div className="rightSide">
      <Typography variant="h6">{userFirstName.trim()}'s Events</Typography>
      {events.length > 0 && (
        <div>
          <div className="eventContainer">
            {events
              .sort((a, b) => a.startTime - b.startTime)
              .map((event) => (
                <EventCard event={event} setEvents={setEvents} key={event.id} />
              ))}
          </div>
        </div>
      )}
      {events.length == 0 && (
        <Typography style={{ marginLeft: '5%' }}>{userFirstName} has no upcoming events</Typography>
      )}
    </div>
  );
};

export default RightSide;
