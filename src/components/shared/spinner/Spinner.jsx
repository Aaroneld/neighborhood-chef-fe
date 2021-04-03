import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
      <CircularProgress style={{ color: '#58D573', alignSelf: 'center' }} size={'5rem'} />
    </div>
  );
};

export default Spinner;
