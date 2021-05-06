import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function Description({ classes, event }) {
  return (
    <div className={classes.description}>
      <Typography variant="h6" className={classes.mobileHeader} style={{ padding: '0' }}>
        Description
      </Typography>
      <p>
        <u>{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}</u> {event.description}{' '}
      </p>
    </div>
  );
}
