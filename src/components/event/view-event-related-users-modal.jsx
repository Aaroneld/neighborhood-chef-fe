import React, { useEffect } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './view-event-related-user-modal.styles';
import { toggleModal } from '../../utilities/actions';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function ViewEventRelatedUsersModal() {
  const classes = styles();
  const focusedEventInfo = useSelector((state) => state.focusedEventInfo);
  const dispatch = useDispatch();
  const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    if (matches) {
      dispatch(toggleModal(true));
    }
    // eslint-disable-next-line
  }, [matches]);

  return (
    <>
      <div>
        <div className={classes.container}>
          {focusedEventInfo.attending && (
            <div className={classes.avatarContainer}>
              <Typography variant="h6">Attending:</Typography>
              <AvatarGroup max={15}>
                {focusedEventInfo.attending.map((user) => {
                  return (
                    <Link to={`/profile/${user.id}`} className={classes.link}>
                      <Avatar
                        key={user.id}
                        title={`${user.firstName} ${user.lastName}`}
                        aria-label="avatar"
                        className={classes.avatar}
                        src={user.photo ? user.photo : ''}
                      >
                        {!user.photo && (
                          <Typography style={{ paddingRight: '2%' }}>{`${user.firstName
                            .split('')[0]
                            .toUpperCase()}${user.lastName.split('')[0].toUpperCase()}`}</Typography>
                        )}
                      </Avatar>
                    </Link>
                  );
                })}
                {focusedEventInfo.attending.length === 0 && (
                  <Typography variant="h6" style={{ border: 'none', fontSize: '90%', textAlign: 'left' }}>
                    No one has confirmed they are going to this event.
                  </Typography>
                )}
              </AvatarGroup>
            </div>
          )}
          {focusedEventInfo.invited && (
            <div className={classes.avatarContainer}>
              <Typography variant="h6">Invited:</Typography>
              <AvatarGroup max={15}>
                {focusedEventInfo.invited.map((user) => {
                  return (
                    <Link to={`/profile/${user.id}`} className={classes.link}>
                      <Avatar
                        key={user.id}
                        title={`${user.firstName} ${user.lastName}`}
                        aria-label="avatar"
                        className={classes.avatar}
                        src={user.photo ? user.photo : ''}
                      >
                        {!user.photo && (
                          <Typography style={{ paddingRight: '2%' }}>{`${user.firstName
                            .split('')[0]
                            .toUpperCase()}${user.lastName.split('')[0].toUpperCase()}`}</Typography>
                        )}
                      </Avatar>
                    </Link>
                  );
                })}
                {focusedEventInfo.invited.length === 0 && (
                  <Typography variant="h6" style={{ border: 'none', fontSize: '90%', textAlign: 'left' }}>
                    No one has been invited to this event.
                  </Typography>
                )}
                ;
              </AvatarGroup>
            </div>
          )}
          {focusedEventInfo.maybeGoing && (
            <div className={classes.avatarContainer}>
              <Typography variant="h6">Maybe Going:</Typography>
              <AvatarGroup max={15}>
                {focusedEventInfo.maybeGoing.map((user) => {
                  return (
                    <Link to={`/profile/${user.id}`} className={classes.link}>
                      <Avatar
                        key={user.id}
                        title={`${user.firstName} ${user.lastName}`}
                        aria-label="avatar"
                        className={classes.avatar}
                        src={user.photo ? user.photo : ''}
                      >
                        {!user.photo && (
                          <Typography style={{ paddingRight: '2%' }}>{`${user.firstName
                            .split('')[0]
                            .toUpperCase()}${user.lastName.split('')[0].toUpperCase()}`}</Typography>
                        )}
                      </Avatar>
                    </Link>
                  );
                })}
                {focusedEventInfo.maybeGoing.length === 0 && (
                  <Typography variant="h6" style={{ border: 'none', fontSize: '90%', textAlign: 'left' }}>
                    No one has confirmed they are maybe going to this event.
                  </Typography>
                )}
                ;
              </AvatarGroup>
            </div>
          )}
          <div>
            <Typography variant="h5" onClick={() => dispatch(toggleModal())} className={classes.closeBtn}>
              CLOSE
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.overlay} />
      </div>
    </>
  );
}
