import React from 'react';
import { cardStyles } from '../../../../../styles';
import Typography from '@material-ui/core/Typography';
import { parseTime, chooseDefaultPicture } from '../../../../../utilities/functions';
import CardMedia from '@material-ui/core/CardMedia';

const Image = (props) => {
  const classes = cardStyles();
  const timeObject = parseTime(props.startTime, props.endTime);

  return (
    <>
      <CardMedia
        className={classes.dashboardImg}
        component="img"
        src={props.photo ? props.photo : chooseDefaultPicture(props.title.charAt(0))}
        title="Recent Card Event Photo"
      />

      <div className={classes.dateOverlay}>
        <Typography variant="h5">{timeObject.day}</Typography>
        <Typography variant="h5" style={{ color: '#FF9900' }}>
          {timeObject.monthShort}
        </Typography>
      </div>
    </>
  );
};

export default Image;
