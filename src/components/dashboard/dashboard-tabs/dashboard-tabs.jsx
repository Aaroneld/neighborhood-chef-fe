import React from 'react';
import { DashboardTabStyles } from './dashboard-tabs.styles';

export default function DashboardTabs({ currentTab, selectCurrentTab }) {
  const classes = DashboardTabStyles({ currentTab });

  const handleTabClick = (tabNumber) => {
    selectCurrentTab(tabNumber);
  };

  return (
    <div className={classes.container}>
      <div className={classes.tabs}>
        <p
          className={`${classes.tab} ${currentTab === 1 ? classes.currentTab : ''}`}
          onClick={() => {
            handleTabClick(1);
          }}
        >
          Recent Events
        </p>
        <p
          className={`${classes.tab} ${currentTab === 2 ? classes.currentTab : ''}`}
          onClick={() => {
            handleTabClick(2);
          }}
        >
          Invited Events
        </p>
        <p
          className={`${classes.tab} ${currentTab === 3 ? classes.currentTab : ''}`}
          onClick={() => {
            handleTabClick(3);
          }}
        >
          Your Events
        </p>
      </div>
    </div>
  );
}
