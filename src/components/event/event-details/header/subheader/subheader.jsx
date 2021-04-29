import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default function SubHeader({ event, classes }) {
  return (
    <div className={classes.subHeader}>
      <Link to={`/profile/${event.User.id}`} style={{ cursor: 'pointer', marginRight: '2%' }}>
        <Avatar
          key={event.User.id}
          title={`${event.User.firstName} ${event.User.lastName}`}
          aria-label="avatar"
          className={classes.avatar}
          src={event.User.photo ? null : event.User.photo}
        >
          {!event.User.photo && (
            <Typography>{`${event.User.firstName.split('')[0].toUpperCase()}${event.User.lastName
              .split('')[0]
              .toUpperCase()}`}</Typography>
          )}
        </Avatar>
      </Link>
      <Typography variant="caption" style={{ fontStyle: 'italic' }}>
        <span>Created by </span>
        <Link
          to={`/profile/${event.User.id}`}
          style={{ cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}
        >{`${event.User.firstName} ${event.User.lastName}`}</Link>
      </Typography>
    </div>
  );
}
