import React from 'react';
import { hashtagAndWarningStyles } from '../../../../CreateEvent.styles';

const Hashtag = ({ hashtag, values, setValues, disableX }) => {
  const styles = hashtagAndWarningStyles();

  const removeHashtag = () => {
    setValues({ ...values, hashtags: values.hashtags.filter((tag) => tag !== hashtag) });
  };

  return (
    <div className={styles.root + ' hashtags'} style={{ background: '#58D473' }}>
      <p className={styles.p}>#{hashtag}</p>
      <span style={{display: `${disableX ? "none" : "default"}`}}className={styles.span} onClick={() => removeHashtag()}>
        x
      </span>
    </div>
  );
};

export default Hashtag;
