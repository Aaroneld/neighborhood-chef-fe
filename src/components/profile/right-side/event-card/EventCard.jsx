import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { parseTime, chooseDefaultPicture } from '../../../../utilities/functions';
import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { print } from 'graphql';
import jwt from 'jsonwebtoken';
import { axiosWithAuth } from '../../../../utilities/axiosWithAuth';
import { DELETE_EVENT } from '../../../../graphql/events/event-mutations';
import { deleteEvent } from '../../../../utilities/actions';

const AccountEventCard = ({ event, setEvents }) => {
  const currentUserId = useSelector((state) => state.user.id);
  const timeObject = parseTime(event.startTime);
  const photo = event.photo ? event.photo : chooseDefaultPicture(event.title.charAt(0));
  const attending = event.EventUsers.attending;
  const { push, history } = useHistory();
  const dispatch = useDispatch();

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
        dispatch(deleteEvent(event.id));
        setEvents((prevState) => prevState.filter((e) => e.id !== event.id));
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
    <Card
      className="eventCard"
      style={{
        boxShadow: '-2px 0px 32px -5px rgba(25,25,25,0.2)',
        marginTop: '10px',
        zIndex: 20,
      }}
    >
      <CardMedia style={{ maxHeight: 100 }} component="img" src={photo} title="Event Photo" />
      <Typography
        variant="h6"
        style={{ fontWeight: 'bold', cursor: 'pointer' }}
        onClick={() => {
          history.push(`/events/${event.id}`);
          history.go();
        }}
      >
        {event.title.length < 22 ? event.title : `${event.title.slice(0, 22)}...`}
      </Typography>
      <Typography>{`${attending.length || '0'} attending`}</Typography>
      <Typography>{timeObject.commentTime}</Typography>
      {event.User.id === currentUserId && (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <DeleteOutlinedIcon
            onClick={removeEvent}
            style={{ fontSize: '2.5rem', cursor: 'pointer', margin: '.5%' }}
          />
          <Icon
            icon={pencilIcon}
            onClick={redirectToEventEdit}
            style={{ fontSize: '2.5rem', cursor: 'pointer', margin: '.5%' }}
          />
        </div>
      )}
    </Card>
  );
};

export default AccountEventCard;
