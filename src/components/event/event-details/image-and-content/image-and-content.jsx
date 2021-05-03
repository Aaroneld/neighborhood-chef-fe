import React from 'react';

export default function ImageAndContent({ event, classes }) {
  return (
    <div className={classes.imageAndContent}>
      <div className={classes.imageContainer}>
        <div className={classes.img} title="Event Details Photo" />
      </div>
    </div>
  );
}
