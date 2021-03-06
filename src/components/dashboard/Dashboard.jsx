import React, { useState } from 'react';
import Card from '@material-ui/core/Card';

import DashboardTabs from './dashboard-tabs/dashboard-tabs';
import EventView from './event-view/event-view';
import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '80vw',
    boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
    borderRadius: '20px',
    borderTopRightRadius: '0',
    background: 'transparent',
    overflowX: 'hidden',
    height: '100%',
    '& .container': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      overflowX: 'hidden',
    },

    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
  },
}));

const Dashboard = () => {
  const [currentTab, selectCurrentTab] = useState(1);
  const classes = styles();

  return (
    <Card className={classes.root}>
      <div className="container">
        <DashboardTabs currentTab={currentTab} selectCurrentTab={selectCurrentTab} />
        <EventView currentTab={currentTab} />
      </div>
    </Card>
  );
};

export default Dashboard;
