import React from 'react';

//style imports
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import { cardStyles } from '../../../styles';

import Divider from '@material-ui/core/Divider';

import { chooseDefaultPicture } from '../../../utilities/functions';

import ImageAndContent from './image-and-content/image-and-content';
import Description from './description/description';
import Modifiers from './modifiers/modifiers';
import Details from './details/details';
import AttendingButtons from './attending-buttons/attending-buttons';
import Hashtags from './hashtag/hashtags';

const EventDetails = ({ event }) => {
  const photo = event.photo ? event.photo : chooseDefaultPicture(event.title.charAt(0));
  const classes = cardStyles({ img: photo });

  return (
    <div className={classes.eventDetailsContainer}>
      {event ? (
        <>
          <div className={classes.headerImg} />
          <Card className={`${classes.root} ${classes.fullEvent}`}>
            <ImageAndContent event={event} classes={classes} />
            <Description event={event} classes={classes} />
            <Divider variant="middle" style={{ margin: '1% auto', width: "95%"}} />
            <Details event={event} classes={classes} />
            <Hashtags event={event} classes={classes} />
            <Modifiers event={event} classes={classes} />
          </Card>
        </>
      ) : (
        <Typography variant="h6">Please select an event to view its details</Typography>
      )}
    </div>
  );
};

export default EventDetails;
