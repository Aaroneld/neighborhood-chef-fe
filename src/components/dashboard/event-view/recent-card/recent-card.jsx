import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { cardStyles } from '../../../../styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { print } from 'graphql';
import { Icon } from '@iconify/react';
import starEmpty from '@iconify-icons/dashicons/star-empty';
import starFilled from '@iconify-icons/carbon/star-filled';
import { timeAgo, parseTime, chooseDefaultPicture } from '../../../../utilities/functions';
import { axiosWithAuth } from '../../../../utilities/axiosWithAuth';
import { ADD_FAVORITE_EVENT, REMOVE_FAVORITE_EVENT } from '../../../../graphql/users/user-mutations';
import StatusButtons from './status-buttons/status-buttons';
import softwareUpload from '@iconify-icons/gg/software-upload';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

// const testAvatar = [
//   {
//     firstName: 'Aaron',
//     lastName: 'Merrifield',
//   },
//   {
//     firstName: 'Aaron',
//     lastName: 'Merrifield',
//   },
//   {
//     firstName: 'Aaron',
//     lastName: 'Merrifield',
//   },
//   {
//     firstName: 'Aaron',
//     lastName: 'Merrifield',
//   },
//   {
//     firstName: 'Aaron',
//     lastName: 'Merrifield',
//   },
//   {
//     firstName: 'Aaron',
//     lastName: 'Merrifield',
//   },
//   {
//     firstName: 'Aaron',
//     lastName: 'Merrifield',
//   },
//   {
//     firstName: 'Aaron',
//     lastName: 'Merrifield',
//   },
// ];

const RecentCard = (props) => {
  const classes = cardStyles();
  const [favorite, setFavorite] = useState(props.isFavorite);
  const timeObject = parseTime(props.startTime, props.endTime);
  const shownTime = timeAgo(props.createDateTime);
  const { push } = useHistory();

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
    <Card className={`${classes.root} ${classes.dashboard}`}>
      <CardHeader
        avatar={
          <Avatar
            key={props.User.id}
            title={`${props.User.firstName} ${props.User.lastName}`}
            aria-label="avatar"
            className={classes.avatar}
            src={props.User.photo ? props.User.photo : ''}
          >
            {!props.User.photo && (
              <Typography>{`${props.User.firstName.split('')[0].toUpperCase()}${props.User.lastName
                .split('')[0]
                .toUpperCase()}`}</Typography>
            )}
          </Avatar>
        }
        title={
          <div
            style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', width: '80%', alignItems: 'center' }}>
              <Link to={`/profile/${props.User.id}`} style={{ cursor: 'pointer' }}>
                <Typography variant="h6">{`${props.User.firstName} `}</Typography>
              </Link>
              <Typography variant="h6" style={{ color: '#A2A4AD' }}>
                &nbsp; created an event
              </Typography>
            </div>
            <button
              style={{ border: 'none', borderRadius: '50%', padding: '5px', cursor: 'pointer' }}
              onClick={() => push(`events/${props.id}`)}
            >
              <Icon
                icon={softwareUpload}
                style={{
                  fontSize: '3rem',
                  color: '#9597A1',
                  marginTop: '1%',
                  marginLeft: '2%',
                  alignSelf: 'right',
                }}
              />
            </button>
          </div>
        }
        subheader={
          <Typography variant="caption">
            <span style={{ opacity: '.6' }}>{shownTime}</span>
          </Typography>
        }
      />
      <CardMedia
        className={classes.dashboardImg}
        component="img"
        src={props.photo ? props.photo : chooseDefaultPicture(props.title.charAt(0))}
        title="Recent Card Event Photo"
      />

      <div className={classes.dateOverlay}>
        <Typography variant="h5">{timeObject.day}</Typography>
        <Typography variant="h5" style={{ color: '#FF9900' }}>
          {timeObject.monthShort}
        </Typography>
      </div>

      <CardContent
        style={{
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '5%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4">
            {props.title.length < 22 ? props.title : `${props.title.slice(0, 22)}...`}
          </Typography>
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
        {props.EventUsers.attending.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <AvatarGroup max={5}>
              {props.EventUsers.attending.length > 0 &&
                props.EventUsers.attending.map((user) => {
                  console.log(user);
                  return (
                    <Link
                      to={`/profile/${user.id}`}
                      style={{ border: 'none', background: 'transparent', overflow: 'hidden' }}
                    >
                      <Avatar
                        key={user.id}
                        title={`${user.firstName} ${user.lastName}`}
                        aria-label="avatar"
                        style={{
                          cursor: 'pointer',
                          border: '1px solid white',
                          background: '#DCDCDC',
                        }}
                        src={user.photo ? user.photo : ''}
                      >
                        {!user.photo && (
                          <Typography
                            style={{ fontSize: '130%', paddingRight: '2%' }}
                          >{`${user.firstName.split('')[0].toUpperCase()}${user.lastName
                            .split('')[0]
                            .toUpperCase()}`}</Typography>
                        )}
                      </Avatar>
                    </Link>
                  );
                })}
              {props.EventUsers.attending.length > 4 && (
                <Avatar
                  key={'count'}
                  title={'count'}
                  aria-label="avatar"
                  style={{
                    cursor: 'pointer',
                    border: '1px solid white',
                    background: '#DCDCDC',
                  }}
                >
                  <Typography style={{ fontSize: '130%', paddingRight: '2%' }}>
                    +{props.EventUsers.attending.length - 4}
                  </Typography>
                </Avatar>
              )}
              );
            </AvatarGroup>
            <div style={{ paddingRight: '6%' }}>{props.EventUsers.attending.length} neighbors going</div>
          </div>
        )}
        {props.EventUsers.attending.length === 0 && (
          <div style={{ margin: '3% 0' }}>Confirmed Attending: {props.EventUsers.attending.length}</div>
        )}
      </CardContent>

      <div style={{ borderTop: '.75px solid #F2F2F2', width: '90%', alignSelf: 'center' }} />
      <CardContent>
        <div className={classes.statusButtonContainerDashboard}>
          <Typography variant="h6">Going?</Typography>
          <StatusButtons id={props.id} currentUserId={props.currentUserId} />
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentCard;
