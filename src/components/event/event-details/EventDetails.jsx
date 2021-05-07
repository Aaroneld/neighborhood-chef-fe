import React from 'react';

//style imports
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import { cardStyles } from '../../../styles';

import Divider from '@material-ui/core/Divider';

import { chooseDefaultPicture } from '../../../utilities/functions';

import ImageAndContent from './image-and-content/image-and-content';
import Description from './description/description';
import Modifiers from './modifiers/modifiers';
import Details from './details/details';
import Hashtags from './hashtag/hashtags';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import jwt from 'jsonwebtoken';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';
import { DELETE_EVENT } from '../../../graphql/events/event-mutations';
import { deleteEvent } from '../../../utilities/actions';

import { print } from 'graphql';
import Attending from './attending/attending';
import { propTypes } from 'react-mapbox-gl-geocoder';

const EventDetails = ({ event }) => {
  const photo = event.photo ? event.photo : chooseDefaultPicture(event.title.charAt(0));
  const classes = cardStyles({ img: photo, hashtags: event.hashtags || [] });
  const currentUserId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const { push } = useHistory();

  const removeEvent = () => {
    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: 'post',
      data: {
        query: print(DELETE_EVENT),
        variables: {
          id: Number(event.id),
        },
      },
    }).then(
      (res) => {
        push('/dashboard');
        dispatch(deleteEvent(event.id));
      },
      (err) => console.dir(err)
    );
  };

  const redirectToEventEdit = () => {
    const startTime = new Date(Number(event.startTime));
    const endTime = new Date(Number(event.endTime));

    const token = jwt.sign(
      {
        id: event.id,
        title: event.title,
        description: event.description,
        address: event.address,
        latitude: event.latitude,
        longitude: event.longitude,
        createDateTime: event.createDateTime,
        //prettier-ignore
        startTime: `${startTime.getHours() < 10 ? '0' : ''}${startTime.getHours()}:${startTime.getMinutes() < 10 ? '0' : ''}${startTime.getMinutes()}:00`,
        //prettier-ignore
        endTime: event.endTime ? `${endTime.getHours() < 10 ? '0' : ''}${endTime.getHours()}:${endTime.getMinutes() < 10 ? '0' : ''}${endTime.getMinutes()}:00` : '',
        category: event.category ? event.category : '',
        //prettier-ignore
        date: `${startTime.getFullYear()}-${startTime.getMonth() + 1 < 10 ? '0' : ''}${startTime.getMonth() + 1}-${startTime.getDate() < 10 ? '0' : ''}${startTime.getDate()}`,
        modifiers: event.modifiers ? event.modifiers : [],
        hashtags: event.hashtags ? event.hashtags : [],
        allergenWarnings: event.allergenWarnings ? event.allergenWarnings : [],
        dietaryWarnings: event.dietaryWarnings ? event.dietaryWarnings : [],
      },
      'secret'
    );
    push(`/create-event/${token}`);
  };

  return (
    <div className={classes.eventDetailsContainer}>
      {event ? (
        <>
          <div className={classes.headerImg} />
          <Card className={`${classes.root} ${classes.fullEvent}`}>
            {event.User.id === currentUserId && (
              <div className={classes.iconsContainer}>
                <DeleteOutlinedIcon
                  className={classes.icon}
                  onClick={removeEvent}
                  style={{ color: 'white', fontSize: '3rem', opacity: 0.7 }}
                />
                <Icon
                  icon={pencilIcon}
                  className={classes.icon}
                  onClick={redirectToEventEdit}
                  style={{ color: 'white', fontSize: '3rem', opacity: 0.7 }}
                />
              </div>
            )}
            <ImageAndContent event={event} classes={classes} />
            <Description event={event} classes={classes} />
            <Divider variant="middle" style={{ margin: '1% auto', width: '95%' }} />
            <Details event={event} classes={classes} />
            <Attending attending={event.EventUsers.attending} classes={classes} />
            <Hashtags event={event} classes={classes} />
            <Modifiers event={event} classes={classes} />
          </Card>
        </>
      ) : (
        <Typography variant="h6">Please select an event to view its details</Typography>
      )}
    </div>
  );
};

export default EventDetails;
