import React, { useRef, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import FormContainer from './form-container/FormContainer';
import Card from '@material-ui/core/Card';
import { cardStyles } from './CreateEvent.styles';

const CreateEvent = () => {
  const classes = cardStyles();
  const containerRef = useRef(null);
  const page = useSelector((state) => state.page);

  useLayoutEffect(() => {
    containerRef.current.scrollTop = 0;
  }, [page]);

  return (
    <Card className={classes.root} ref={containerRef}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1%' }}>
        <FormContainer />
      </div>
    </Card>
  );
};

export default CreateEvent;
