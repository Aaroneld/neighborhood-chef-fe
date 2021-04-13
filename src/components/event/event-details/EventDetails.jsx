import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//react router imports

import { useHistory } from 'react-router-dom';
import { print } from 'graphql';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

//style imports
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { cardStyles } from '../../../styles';
import StatusTabs from '../../dashboard/event-view/recent-card/status-buttons/status-buttons';
import Avatar from '@material-ui/core/Avatar';

//icon imports
import { Icon } from '@iconify/react';
import calendarIcon from '@iconify/icons-flat-color-icons/calendar';
import clockIcon from '@iconify/icons-flat-color-icons/clock';
import globeIcon from '@iconify/icons-flat-color-icons/globe';
import pencilIcon from '@iconify/icons-mdi/pencil';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

//data/function imports

import { parseTime, chooseDefaultPicture } from '../../../utilities/functions';

//jsonwebtoken encoder
import jwt from 'jsonwebtoken';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';
import { DELETE_EVENT } from '../../../graphql/events/event-mutations';
import { deleteEvent } from '../../../utilities/actions';

const EventDetails = ({ event, attending, setAttending }) => {
  const currentUserId = useSelector((state) => state.user.id);
  const photo = event.photo ? event.photo : chooseDefaultPicture(event.title.charAt(0));
  const classes = cardStyles({ img: photo });
  const dispatch = useDispatch();
  const { push } = useHistory();

  let timeObject, parsedAddressURL;

  if (Object.keys(event).length > 0) {
    timeObject = parseTime(event.startTime, event.endTime);
    parsedAddressURL = `https://www.google.com/maps/search/${event.address.replace(' ', '+')}`;
  }

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

  return (
    <div className={classes.eventDetailsContainer}>
      {event ? (
        <Card className={`${classes.root} ${classes.fullEvent}`}>
          <div className={classes.headerContainer}>
            <CardHeader
              style={{ width: '100%' }}
              title={
                <Typography variant="h3" className={classes.title} style={{ marginBottom: '5px' }}>
                  {event.title}
                </Typography>
              }
              subheader={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Link to={`/profile/${event.User.id}`} style={{ cursor: 'pointer', marginRight: '2%' }}>
                    <Avatar
                      key={event.User.id}
                      title={`${event.User.firstName} ${event.User.lastName}`}
                      aria-label="avatar"
                      className={classes.avatar}
                      src={event.User.photo ? null : event.User.photo}
                    >
                      {!event.User.photo && (
                        <Typography>{`${event.User.firstName
                          .split('')[0]
                          .toUpperCase()}${event.User.lastName.split('')[0].toUpperCase()}`}</Typography>
                      )}
                    </Avatar>
                  </Link>
                  <Typography variant="caption" style={{ opacity: '.5', fontStyle: 'italic' }}>
                    <span>Created by </span>
                    <Link
                      to={`/profile/${event.User.id}`}
                      style={{ cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}
                    >{`${event.User.firstName} ${event.User.lastName}`}</Link>
                  </Typography>
                </div>
              }
            />
            {event.User.id === currentUserId && (
              <div style={{ display: 'flex' }}>
                <DeleteOutlinedIcon className={classes.icon} onClick={removeEvent} />
                <Icon icon={pencilIcon} className={classes.icon} onClick={redirectToEventEdit} />
              </div>
            )}
          </div>
          {/* <div className={classes.img} title="Event Details Photo" /> */}
          <div style={{ margin: '5px 0' }}>
            <Typography style={{ fontWeight: '700' }} variant="h6">
              Description
            </Typography>
            <p style={{ margin: '5px 0' }}> {event.description}</p>
          </div>

          <div style={{ margin: '5px 0' }}>
            <Typography style={{ fontWeight: '700' }} variant="h6">
              Details
            </Typography>

            <div style={{ display: 'flex', margin: '5px 0' }}>
              <span className={classes.span} style={{ marginRight: '3%' }}>
                <Icon height="50" icon={calendarIcon} />
              </span>
              <div>
                {timeObject.formattedDate}
                <p style={{ color: '#909090' }}>Date</p>
              </div>
            </div>
            <div style={{ display: 'flex', margin: '5px 0' }}>
              <span className={classes.span} style={{ marginRight: '3%' }}>
                <Icon height="50" icon={clockIcon} />
              </span>
              <div>
                {`${timeObject.startTime} ${
                  timeObject.endTime !== 'Invalid date' ? '- ' + timeObject.endTime : ''
                }`}
                <p style={{ color: '#909090' }}>Time</p>
              </div>
            </div>

            <div className={classes.addressContainer} style={{ margin: '5px 0' }}>
              <span style={{ marginRight: '3%' }}>
                <Icon height="50" icon={globeIcon} />
              </span>
              <div>
                <a href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
                  {event.address}
                </a>
                <p style={{ color: '#909090' }}>Address</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6">Will you be attending this event?</Typography>
            <div className={classes.statusButtonContainer}>
              <StatusTabs
                id={event.id}
                currentUserId={currentUserId}
                attending={attending}
                setAttending={setAttending}
              />
            </div>
          </div>
        </Card>
      ) : (
        <Typography variant="h6">Please select an event to view its details</Typography>
      )}
    </div>
  );
};

export default EventDetails;
