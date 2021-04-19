import React from 'react';
import FormContainer from './form-container/FormContainer';
import Card from '@material-ui/core/Card'
import {cardStyles} from './CreateEvent.styles';

const CreateEvent = () => {
  
  const classes = cardStyles();
  
  return (
    <Card className={classes.root}>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1%'}}>
      <FormContainer />
    </div>
    </Card> 
  );
};

export default CreateEvent;
