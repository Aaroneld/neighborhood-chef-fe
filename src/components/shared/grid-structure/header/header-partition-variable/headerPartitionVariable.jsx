import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import MonthPicker from '../../../../calender/MonthPicker';
import CreateEventHeader from '../../../../create-events/CreateEventHeader';

import Logo from '../../logo/logo';
import { Icon } from '@iconify/react';
import chefIcon from '@iconify/icons-whh/chef';

const styles = makeStyles({
  container: {
    width: '100%',
    height: '10vh',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '20px',
    alignItems: 'center',
  },
});

function VariableHeader() {
  const classes = styles();
  const location = useLocation();
  const [urlLocation, setUrlLocation] = useState(location.pathname.split('/')[1]);
  useEffect(() => {
    setUrlLocation(location.pathname.split('/')[1]);
  }, [location]);

  switch (urlLocation) {
    case 'create-event':
      return (
        <section className={classes['container']}>
          <CreateEventHeader />
        </section>
      );
    case 'view-events':
      return (
        <section className={classes['container']}>
          <MonthPicker />
        </section>
      );
    default:
      return '';
  }
}

export default VariableHeader;
