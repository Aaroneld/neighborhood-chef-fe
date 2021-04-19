import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { styles } from './submission-success-modal.styles';
import { buttonStyles } from '../../../styles';
import Typography from '@material-ui/core/Typography';

export default function SubmissionSuccessModal() {
  const classes = styles();
  const buttonClasses = buttonStyles();

  const { push } = useHistory();

  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (countDown === -1) {
      push('/');
    }
  }, [countDown, push]);

  const handleClick = (_) => {
    push('/');
  };
  return (
    <div className={classes.container}>
      <Typography variant="h1">Congratulations!</Typography>
      <Typography variant="h4"> Your account has been created</Typography>
      <Typography variant="h6"> An activation letter has been sent to your email</Typography>
      <Typography variant="h3">You will be redirected to the home page in...</Typography>
      <Typography variant="h1" id="redirect-time">
        {countDown}
      </Typography>
      <button className={buttonClasses.root + ' ' + buttonClasses.single} onClick={handleClick}>
        Redirect Now
      </button>
    </div>
  );
}
