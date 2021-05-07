import React from 'react';
import { Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { parseTime } from '../../../../../utilities/functions';
import Participants from './participants/Participants';
import { cardStyles } from '../../../../../styles';

const Details = (props) => {
  const timeObject = parseTime(props.startTime, props.endTime);
  const classes = cardStyles();

  return (
    <CardContent className={classes.dashboardDetailsContainer}>
      <div className="titleAddFavoriteContainer">
        <Link to={`/events/${props.id}`}>
          <Typography variant="h4" id="dashboard-event-title">
            {props.title.length < 16 ? props.title : `${props.title.slice(0, 16)}...`}
          </Typography>
        </Link>
      </div>
      <div style={{ margin: '3% 0', display: 'flex' }}>
        <Typography style={{ color: '#58D473' }}>{timeObject.startTime.toUpperCase()}</Typography>

        {props.endTime && (
          <>
            <Typography style={{ color: '#9597A1' }}>&nbsp;to&nbsp;</Typography>
            <Typography style={{ color: '#F65252' }}>{timeObject.endTime.toUpperCase()}</Typography>
          </>
        )}
      </div>
      <Participants users={props.EventUsers.attending} />
    </CardContent>
  );
};

export default Details;
