import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import MonthPicker from '../../../../calender/MonthPicker';
import CreateEventHeader from '../../../../create-events/CreateEventHeader';
import EventHeader from '../../../../../components/event/event-header';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const styles = makeStyles((theme) => ({
  container: {
    width: '100%',
    flexBasis: '85%',
    height: 'inherit',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '20px',
    alignItems: 'center',
    paddingBottom: '1%',
    marginTop: '0%',
    position: 'relative',

    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
    },
  },
}));

function VariableHeader({ setEmpty }) {
  const classes = styles();
  const location = useLocation();
  const [urlLocation, setUrlLocation] = useState(location.pathname.split('/')[1]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setUrlLocation(location.pathname.split('/')[1]);
  }, [location]);

  useEffect(() => {
    if (matches) {
      if (!['create-event', 'view-events', 'dashboard', 'events'].includes(urlLocation)) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    } else {
      setEmpty(false);
    }
    // eslint-disable-next-line
  }, [location, urlLocation, matches]);

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
    case 'events':
      return (
        <section className={classes['container']}>
          <EventHeader />
        </section>
      );
    default:
      return '';
  }
}

export default VariableHeader;
