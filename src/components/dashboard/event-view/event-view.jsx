import React from 'react';
import RecentCard from './recent-card/recent-card';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '0 8% 2.5% 8%',
    width: '100%',

    [theme.breakpoints.down('lg')]: {
      padding: '0 0 0 0',
    },

    [theme.breakpoints.down('md')]: {
      padding: "0 0 0 3%"
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: '0 0 0 0',
    },
  },
}));

export default function EventView({ currentTab }) {
  const events = useSelector((state) => {
    let eventList = [];
    if (state.user.UserEvents) {
      if (currentTab === 1) {
        eventList = state.user.UserEvents.local;
      } else if (currentTab === 2) {
        eventList = state.user.UserEvents.invited;
      } else if (currentTab === 3) {
        eventList = state.user.UserEvents.owned;
      }

      eventList = eventList.map((event) => {
        if (state.user.UserEvents.favorited.includes(Number(event.id))) {
          return { ...event, favorite: true };
        } else {
          return { ...event, favorite: false };
        }
      });
    }
    return eventList;
  });

  const currentUserId = useSelector((state) => state.user.id);
  const classes = styles();

  return (
    <div className={classes.root} style={{ justifyContent: events.length === 0 ? 'center' : 'flex-start' }}>
      {events.length > 0 ? (
        events
          .sort((a, b) => a.startTime - b.startTime)
          .map((event) => (
            <RecentCard {...event} key={event.id} isFavorite={event.favorite} currentUserId={currentUserId} />
          ))
      ) : (
        <Typography style={{ marginTop: '20px' }}>No recently created events.</Typography>
      )}
    </div>
  );
}
