import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import { cardStyles } from './EventPopup.styles';
import StatusButtons from '../../../dashboard/event-view/recent-card/status-buttons/status-buttons';

const EventPopup = ({ selectedEvent }) => {
  const classes = cardStyles();
  const userId = useSelector((state) => state.user.id);
  let parsedAddressURL;

  if (Object.keys(selectedEvent).length > 0) {
    parsedAddressURL = `https://www.google.com/maps/search/${selectedEvent.address.replace(' ', '+')}`;
  }
  return (
    <Card className={classes.card}>
      <Link to={`/events/${selectedEvent.id}`}>
        <Typography variant="p">
          {selectedEvent.title.length <= 15 ? selectedEvent.title : `${selectedEvent.title.slice(0, 15)}...`}
        </Typography>
      </Link>
      <Typography variant="caption">
        <span>created by</span>
        {` ${selectedEvent.User.firstName} ${selectedEvent.User.lastName}`}
      </Typography>
      <p>Confirmed Attending: {selectedEvent.EventUsers.attending.length}</p>
      <a style={{ fontSize: '1.2rem' }} href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
        {selectedEvent.address}
      </a>

      <div>
        <Typography variant="h6" style={{ marginBottom: '5px' }}>
          Will you be attending this event?
        </Typography>
        <div style={{ marginBottom: '10px' }}>
          <StatusButtons id={selectedEvent.id} currentUserId={userId} />
        </div>
      </div>
    </Card>
  );
};

export default EventPopup;
