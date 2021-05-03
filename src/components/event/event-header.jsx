import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { styles } from './event-header.styles.js';
import { cardStyles } from '../../styles';
import AttendingButtons from "./event-details/attending-buttons/attending-buttons";

export default function EventHeader() {
  const eventInfo = useSelector((state) => state.focusedEventInfo);
  const classes = styles();
  const statusButtonClasses = cardStyles();

  return (
    <div className={classes.container}>
          {eventInfo && 
                <>
                <Typography variant="h2">{eventInfo.title}</Typography>
                <Typography>
                    <span>Created by: </span>
                    <Link to={`/profile/${eventInfo.eventuser.id}`}>{`${eventInfo.eventuser.firstName} ${eventInfo.eventuser.lastName}`}</Link>
                </Typography>
                <AttendingButtons classes={statusButtonClasses} event={eventInfo}/>
                </>
          }
          
    </div>
  );
}
