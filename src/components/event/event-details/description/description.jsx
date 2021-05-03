import React from 'react';

export default function Description({ classes, event }) {
  return (
    <div className={classes.description}>
      <p><u>{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</u> {event.description} </p>
    </div>
  );
}
