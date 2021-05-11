import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cardStyles } from '../../../../../styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { print } from 'graphql';
import { Icon } from '@iconify/react';
import starEmpty from '@iconify-icons/dashicons/star-empty';
import starFilled from '@iconify-icons/carbon/star-filled';
import { timeAgo } from '../../../../../utilities/functions';
import { axiosWithAuth } from '../../../../../utilities/axiosWithAuth';
import { ADD_FAVORITE_EVENT, REMOVE_FAVORITE_EVENT } from '../../../../../graphql/users/user-mutations';
import { updateFavoriteEvents } from '../../../../../utilities/actions';

const Header = (props) => {
  const [favorite, setFavorite] = useState(props.isFavorite);
  const classes = cardStyles();
  const shownTime = timeAgo(props.createDateTime);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addFavoriteEvent = () => {
    const favoriteEvent = {
      event_id: Number(props.id),
      user_id: Number(props.currentUserId),
    };

    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(ADD_FAVORITE_EVENT),
        variables: { favoriteEvent: favoriteEvent },
      })
      .then(() => {
        setFavorite(!favorite);
        dispatch(updateFavoriteEvents([...user.UserEvents.favorited, Number(props.id)]));
      })
      .catch((err) => console.dir(err));
  };

  const removeFavoriteEvent = () => {
    const favoriteEvent = {
      event_id: Number(props.id),
      user_id: Number(props.currentUserId),
    };

    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(REMOVE_FAVORITE_EVENT),
        variables: { favoriteEvent: favoriteEvent },
      })
      .then((res) => {
        setFavorite(!favorite);
        dispatch(updateFavoriteEvents(user.UserEvents.favorited.filter((id) => id !== Number(props.id))));
      })
      .catch((err) => console.dir(err));
  };

  return (
    <>
      <CardHeader
        avatar={
          <Link to={`/profile/${props.User.id}`} style={{ cursor: 'pointer' }}>
            <Avatar
              key={props.User.id}
              title={`${props.User.firstName} ${props.User.lastName}`}
              aria-label="avatar"
              className={`${classes.avatar} ${classes.dashboardAvatar}`}
              src={props.User.photo ? props.User.photo : ''}
            >
              {!props.User.photo && (
                <Typography>{`${props.User.firstName.split('')[0].toUpperCase()}${props.User.lastName
                  .split('')[0]
                  .toUpperCase()}`}</Typography>
              )}
            </Avatar>
          </Link>
        }
        title={
          <div className={classes.titleContainer}>
            <div style={{ display: 'flex', width: '85%', alignItems: 'center', flexWrap: 'nowrap' }}>
              <Link to={`/profile/${props.User.id}`} style={{ cursor: 'pointer' }}>
                <Typography variant="h6">
                  {props.User.firstName.length <= 10
                    ? props.User.firstName
                    : `${props.User.firstName.split('')[0].toUpperCase()}${props.User.lastName.split('')[0]}`}
                  &nbsp;
                </Typography>
              </Link>
              <Typography variant="h6" style={{ color: '#A2A4AD', whiteSpace: 'nowrap', fontSize: '115%' }}>
                created an event
              </Typography>
            </div>
            {!favorite ? (
              <div className={classes.headerBtn} onClick={addFavoriteEvent}>
                <Icon icon={starEmpty} />
              </div>
            ) : (
              <div className={classes.headerBtn} onClick={removeFavoriteEvent}>
                <Icon icon={starFilled} />
              </div>
            )}
          </div>
        }
        subheader={
          <Typography variant="caption">
            <span style={{ opacity: '.6' }}>{shownTime}</span>
          </Typography>
        }
      />
    </>
  );
};

export default Header;
