import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { print } from 'graphql';
import { Icon } from '@iconify/react';
import starEmpty from '@iconify-icons/dashicons/star-empty';
import starFilled from '@iconify-icons/carbon/star-filled';
import { parseTime } from '../../../../../utilities/functions';
import { axiosWithAuth } from '../../../../../utilities/axiosWithAuth';
import { ADD_FAVORITE_EVENT, REMOVE_FAVORITE_EVENT } from '../../../../../graphql/users/user-mutations';
import Participants from './participants/Participants';
import { cardStyles } from '../../../../../styles';

const Details = (props) => {
  const [favorite, setFavorite] = useState(props.isFavorite);
  const timeObject = parseTime(props.startTime, props.endTime);
  const classes = cardStyles();

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
      })
      .catch((err) => console.dir(err));
  };

  return (
    <CardContent className={classes.dashboardDetailsContainer}>
      <div className="titleAddFavoriteContainer">
        <Link to={`/events/${props.id}`}>
          <Typography variant="h4">
            {props.title.length < 22 ? props.title : `${props.title.slice(0, 22)}...`}
          </Typography>
        </Link>
        <CardActions disableSpacing>
          {!favorite ? (
            <div style={{ cursor: 'pointer' }} onClick={addFavoriteEvent}>
              <Icon icon={starEmpty} style={{ fontSize: '3.5rem', color: 'gray' }} />
            </div>
          ) : (
            <div style={{ cursor: 'pointer' }} onClick={removeFavoriteEvent}>
              <Icon
                icon={starFilled}
                style={{
                  fontSize: '3.5rem',
                  color: '#f50057',
                }}
              />
            </div>
          )}
        </CardActions>
      </div>
      <div style={{ margin: '3% 0', display: 'flex' }}>
        <Typography style={{ color: '#58D473' }}>{timeObject.startTime.toUpperCase()}</Typography>

        {props.endTime && (
          <>
            <Typography style={{ color: '#9597A1' }}>&nbsp;to&nbsp;</Typography>
            <Typography style={{ color: '#F65252' }}>{timeObject.endTime.toUpperCase()}</Typography>
          </>
        )}
      </div>
      <Participants users={props.EventUsers.attending} />
    </CardContent>
  );
};

export default Details;
