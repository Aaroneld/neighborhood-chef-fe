import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { parseTime, chooseDefaultPicture } from '../../../../utilities/functions';

const AccountEVentCard = ({ event }) => {
  const history = useHistory();
  const timeObject = parseTime(event.startTime);
  const photo = event.photo ? event.photo : chooseDefaultPicture(event.title.charAt(0));
  const attending = event.EventUsers.attending;

  return (
    <Card
      onClick={() => {
        history.push(`/events/${event.id}`);
        history.go();
      }}
      className="eventCard"
      style={{
        boxShadow: '-2px 0px 32px -5px rgba(25,25,25,0.2)',
        marginTop: '10px',
        zIndex: 20,
      }}
    >
      <CardMedia style={{ maxHeight: 100 }} component="img" src={photo} title="Event Photo" />
      <Typography variant="h6" style={{ fontWeight: 'bold' }}>
        {event.title}
      </Typography>
      <Typography>{`${attending.length || '0'} attending`}</Typography>
      <Typography>{timeObject.commentTime}</Typography>
    </Card>
  );
};

export default AccountEVentCard;
