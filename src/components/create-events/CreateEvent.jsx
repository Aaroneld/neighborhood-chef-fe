import React from 'react';
import FormContainer from './form-container/FormContainer';
import Card from '@material-ui/core/Card'
const CreateEvent = () => {
  return (
    <Card style={{boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)', minHeight: '89vh'}}>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1%'}}>
      <FormContainer />
    </div>
    </Card> 
  );
};

export default CreateEvent;
