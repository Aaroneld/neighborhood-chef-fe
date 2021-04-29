import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import SubHeader from './subheader/subheader';

import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Typography from '@material-ui/core/Typography';

import { useSelector, useDispatch } from 'react-redux';
//react router imports

import { useHistory } from 'react-router-dom';
import { print } from 'graphql';

//jsonwebtoken encoder
import jwt from 'jsonwebtoken';
import { axiosWithAuth } from '../../../../utilities/axiosWithAuth';
import { DELETE_EVENT } from '../../../../graphql/events/event-mutations';
import { deleteEvent } from '../../../../utilities/actions';

export default function Header({ classes, event }) {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.user.id);

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
    <div className={classes.headerContainer}>
      <CardHeader
        title={
          <Typography variant="h3" className={classes.title} style={{ marginBottom: '5px' }}>
            {event.title}
          </Typography>
        }
        subheader={<SubHeader classes={classes} event={event} />}
      />
      {event.User.id === currentUserId && (
        <div className={classes.iconsContainer}>
          <DeleteOutlinedIcon className={classes.icon} onClick={removeEvent} />
          <Icon icon={pencilIcon} className={classes.icon} onClick={redirectToEventEdit} />
        </div>
      )}
    </div>
  );
}
