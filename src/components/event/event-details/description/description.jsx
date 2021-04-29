import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Description({ classes, event }) {
  return (
    <div className={classes.description}>
      <Typography variant="h6">Description</Typography>
      <p> {event.description}</p>
    </div>
  );
}
