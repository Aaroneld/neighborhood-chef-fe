import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import { cardStyles } from './EventPopup.styles';
import StatusButtons from '../../../dashboard/event-view/recent-card/status-buttons/status-buttons';
import { chooseDefaultPicture } from '../../../../utilities/functions';

const EventPopup = ({ selectedEvent }) => {
  const classes = cardStyles();
  const userId = useSelector((state) => state.user.id);
  let parsedAddressURL;

  if (Object.keys(selectedEvent).length > 0) {
    parsedAddressURL = `https://www.google.com/maps/search/${selectedEvent.address.replace(' ', '+')}`;
  }
  return (
    <div className={classes.root}>
      <img
        src={selectedEvent.photo ? selectedEvent.photo : chooseDefaultPicture(selectedEvent.title.charAt(0))}
        title="Event Details Photo"
        alt="Event details Avatar"
      />
      <div className="container">
        <Link to={`/events/${selectedEvent.id}`}>
          <Typography variant="p">
            {selectedEvent.title.length <= 15
              ? selectedEvent.title
              : `${selectedEvent.title.slice(0, 15)}...`}
          </Typography>
        </Link>
        <Typography variant="caption">
          <span>created by</span>
          <Link
            style={{ pointer: 'cursor' }}
            to={`/profile/${selectedEvent.User.id}`}
          >{` ${selectedEvent.User.firstName} ${selectedEvent.User.lastName}`}</Link>
        </Typography>
        <p>Confirmed Attending: {selectedEvent.EventUsers.attending.length}</p>
        <a style={{ fontSize: '1.2rem' }} href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
          {selectedEvent.address}
        </a>

        <div className="buttons">
          <Typography variant="h6">Will you be attending this event?</Typography>
          <StatusButtons id={selectedEvent.id} currentUserId={userId} />
        </div>
      </div>
    </div>
  );
};

export default EventPopup;
