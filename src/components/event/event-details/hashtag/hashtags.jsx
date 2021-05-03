import React from 'react';
import Hashtag from '../../../create-events/form-container/form-page-two/add-hashtag/hashtag/Hashtag';
export default function Hashtags({ event, classes }) {
  return (
    <div className={classes.hashtags}>
      {event.hashtags.map((hashtag) => {
        return <Hashtag disableX key={hashtag} hashtag={hashtag} values={''} setValues={''} />;
      })}
    </div>
  );
}
