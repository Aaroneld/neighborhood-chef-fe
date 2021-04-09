import React from 'react';
import Typography from '@material-ui/core/Typography';
import EventCard from './event-card/EventCard';

const RightSide = ({ user }) => {
  return (
    <div className="rightSide">
      <Typography variant="h6">Events</Typography>
      {user.UserEvents.owned.length > 0 ? (
        <div>
          <div className="eventContainer">
            {user.UserEvents.owned
              .sort((a, b) => a.startTime - b.startTime)
              .map((event) => (
                <EventCard event={event} />
              ))}
          </div>
        </div>
      ) : (
        <Typography variant="h6">{`${user.firstName} has 0 events`}</Typography>
      )}
    </div>
  );
};

export default RightSide;
