import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//react router imports

import { useHistory } from 'react-router-dom';
import { print } from 'graphql';

//style imports
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { cardStyles } from '../../../styles';
import StatusTabs from '../../dashboard/event-view/recent-card/status-buttons/status-buttons';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Divider from '@material-ui/core/Divider';

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

import { displayEventModifiersStyles } from '../../create-events/form-container/form-page-three/display-event-modifiers/DisplayModifiers.styles';
import {
  modifierData,
  allergenModifiers,
} from '../../create-events/form-container/form-page-two/FormPageTwo.jsx';
import Modifier from '../../create-events/form-container/form-page-two/modifier/Modifier.jsx';
import AllergyModifier from '../../create-events/form-container/form-page-two/allergies-modifiers.jsx/allergies-modifiers';

const EventDetails = ({ event, attending, setAttending }) => {
  const currentUserId = useSelector((state) => state.user.id);
  const photo = event.photo ? event.photo : chooseDefaultPicture(event.title.charAt(0));
  const classes = cardStyles({ img: photo });
  const modifierClasses = displayEventModifiersStyles();
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
        <>
          <div className={classes.headerImg} />
          <Card className={`${classes.root} ${classes.fullEvent}`}>
            <div className={classes.headerContainer}>
              <CardHeader
                title={
                  <Typography variant="h3" className={classes.title} style={{ marginBottom: '5px' }}>
                    {event.title}
                  </Typography>
                }
                subheader={
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
                          <Typography>{`${event.User.firstName
                            .split('')[0]
                            .toUpperCase()}${event.User.lastName.split('')[0].toUpperCase()}`}</Typography>
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
                }
              />
              {event.User.id === currentUserId && (
                <div className={classes.iconsContainer}>
                  <DeleteOutlinedIcon className={classes.icon} onClick={removeEvent} />
                  <Icon icon={pencilIcon} className={classes.icon} onClick={redirectToEventEdit} />
                </div>
              )}
            </div>
            <div className={classes.imageAndContent}>
              <div className={classes.img} title="Event Details Photo" />
              <div className={classes.contentContainer}>
                <Typography variant="h6">Attending</Typography>
                <AvatarGroup max={12} className={classes.avatarGroup}>
                  {[
                    { firstName: 'Aaron', lastName: 'Merrifield' },
                    { firstName: 'Aaron', lastName: 'Merrifield' },
                    { firstName: 'Aaron', lastName: 'Merrifield' },
                    { firstName: 'Aaron', lastName: 'Merrifield' },
                    { firstName: 'Aaron', lastName: 'Merrifield' },
                  ].map((user, index) => {
                    return (
                      <Link
                        to={`/profile/${user.id}`}
                        style={{
                          cursor: 'pointer',
                          border: 'none',
                          zIndex: `${index}`,
                          marginLeft: `${index !== 0 ? -'1%' : 0}`,
                        }}
                      >
                        <Avatar
                          key={user.id}
                          title={`${user.firstName} ${user.lastName}`}
                          aria-label="avatar"
                          className={classes.avatar}
                          src={user.photo ? null : user.photo}
                          style={{ border: '2px solid #58D573' }}
                        >
                          {!user.photo && (
                            <Typography>{`${user.firstName.split('')[0]}${
                              user.lastName.split('')[0]
                            }`}</Typography>
                          )}
                        </Avatar>
                      </Link>
                    );
                  })}
                </AvatarGroup>

                {event.modifiers.length > 0 && (
                  <div className={classes.modifierContainer}>
                    <Typography variant="h6">Modifications</Typography>
                    <div className={classes.eventDetailsModifier + ' ' + modifierClasses.modifier}>
                      {modifierData.map((modifier) => {
                        if (event.modifiers.includes(modifier.title)) {
                          return <Modifier key={modifier.title} modifier={modifier} />;
                        } else {
                          return '';
                        }
                      })}
                    </div>
                  </div>
                )}
                {event.allergenWarnings.length > 0 && (
                  <div className={classes.modifierContainer}>
                    <Typography variant="h6">Allergy Warnings</Typography>
                    <div className={classes.eventDetailsModifier + ' ' + modifierClasses.modifier}>
                      {allergenModifiers.map((modifier) => {
                        if (event.allergenWarnings.includes(modifier.title)) {
                          return <AllergyModifier key={modifier.title} modifier={modifier} />;
                        } else {
                          return '';
                        }
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={classes.description} style={{}}>
              <Typography variant="h6" styles={{}}>
                Description
              </Typography>
              <p styles={{}}> {event.description}</p>
            </div>

            <Divider variant="middle" style={{ margin: '2.5% 0' }} />

            <div>
              <Typography variant="h6" style={{ textAlign: 'center' }}>
                Details
              </Typography>
              <div className={classes.detailsContainer}>
                <div className={classes.iconTextContainer}>
                  <span className={classes.span}>
                    <Icon height="45" icon={calendarIcon} />
                  </span>
                  <p>{timeObject.formattedDate}</p>
                </div>
                <div className={classes.iconTextContainer}>
                  <span className={classes.span}>
                    <Icon height="45" icon={clockIcon} />
                  </span>
                  <p>
                    {`${timeObject.startTime} ${
                      timeObject.endTime !== 'Invalid date' ? '- ' + timeObject.endTime : ''
                    }`}
                  </p>
                </div>

                <div className={classes.addressContainer}>
                  <span>
                    <Icon height="45" icon={globeIcon} />
                  </span>

                  <a href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
                    {event.address.split(',').slice(0, 2).join(', ')}
                  </a>
                </div>
              </div>
            </div>

            <div className={classes.textAndBtns}>
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
        </>
      ) : (
        <Typography variant="h6">Please select an event to view its details</Typography>
      )}
    </div>
  );
};

export default EventDetails;
