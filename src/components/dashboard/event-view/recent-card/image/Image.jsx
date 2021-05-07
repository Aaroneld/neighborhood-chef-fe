import React from 'react';
import { cardStyles } from '../../../../../styles';
import Typography from '@material-ui/core/Typography';
import { parseTime, chooseDefaultPicture } from '../../../../../utilities/functions';

const Image = (props) => {
  const classes = cardStyles({
    image: props.photo ? props.photo : chooseDefaultPicture(props.title.charAt(0)),
  });
  const timeObject = parseTime(props.startTime, props.endTime);

  return (
    <>
      <div className={classes.dashboardImg} />

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
