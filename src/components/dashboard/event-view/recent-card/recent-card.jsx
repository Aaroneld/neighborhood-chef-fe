import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//style imports
import { cardStyles } from '../../../../styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { print } from 'graphql';

import { Icon } from '@iconify/react';
import starEmpty from '@iconify-icons/dashicons/star-empty';
import starFilled from '@iconify-icons/carbon/star-filled';

import {
    timeAgo,
    parseTime,
    chooseDefaultPicture,
} from '../../../../utilities/functions';

import { axiosWithAuth } from '../../../../utilities/axiosWithAuth';

import {
    ADD_FAVORITE_EVENT,
    REMOVE_FAVORITE_EVENT,
} from '../../../../graphql/users/user-mutations';

import EventButtonModal from './event-button-modal/EventButtonModal';
import StatusButtons from './status-buttons/status-buttons';

const RecentCard = (props) => {
    const classes = cardStyles();
    const [expanded, setExpanded] = useState(false);
    const [favorite, setFavorite] = useState(props.isFavorite);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const timeObject = parseTime(props.startTime, props.endTime);
    const shownTime = timeAgo(props.createDateTime);

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
            .then((res) => {
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
                            <Typography>{`${props.User.firstName
                                .split('')[0]
                                .toUpperCase()}${props.User.lastName
                                .split('')[0]
                                .toUpperCase()}`}</Typography>
                        )}
                    </Avatar>
                }
                title={
                    <Typography variant="h6">
                        {`${props.User.firstName} ${props.User.lastName}`}
                        <span style={{ opacity: '.6' }}> created an event</span>
                    </Typography>
                }
                subheader={
                    <Typography variant="caption">
                        <span style={{ opacity: '.6' }}>{shownTime}</span>
                    </Typography>
                }
            />

            {/* If you need to disable functionality of events showing custom uploaded images on 
        dashboard, change REACT_APP_ALLOW_USER_IMG variable within .env file to 0 (zero) */}
            <CardMedia
                style={{ maxHeight: '40%' }}
                component="img"
                src={
                    props.User.photo ? props.User.photo : chooseDefaultPicture()
                }
                title="Recent Card Event Photo"
            />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                    background: '#f8f8f8',
                    borderRadius: '8px',
                    marginTop: '-14%',
                    marginLeft: '5%',
                    alignSelf: 'left',
                    width: '46px',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <Typography variant="h5">{timeObject.day}</Typography>
                <Typography variant="h5" color="secondary">
                    {timeObject.monthShort}
                </Typography>
            </div>
            <Typography variant="body1" align="center">
                {`@ ${timeObject.startTime}`}
            </Typography>
            <CardContent style={{ padding: '5px' }}>
                <Link to={`events/${props.id}`}>
                    <Typography variant="h4" align="center">
                        {props.title}
                    </Typography>
                </Link>
                <Typography variant="body1" align="center">
                    <span
                        style={
                            props.status === 'NOT_GOING'
                                ? { color: 'rgba(232, 64, 64, .75)' }
                                : props.status === 'MAYBE_GOING'
                                ? { color: 'rgba(255, 169, 40, .75)' }
                                : props.status === 'GOING'
                                ? { color: 'rgba(33, 186, 66, .75)' }
                                : { color: 'rgba(0,0,0, .3)' }
                        }
                    >
                        {props.status === 'GOING'
                            ? 'Going'
                            : props.status === 'NOT_GOING'
                            ? 'Not Going'
                            : props.status === 'MAYBE_GOING'
                            ? 'Maybe Going'
                            : 'undecided'}
                    </span>
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                {!favorite ? (
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={addFavoriteEvent}
                    >
                        <Icon
                            icon={starEmpty}
                            style={{ fontSize: '3.5rem', color: 'gray' }}
                        />
                    </div>
                ) : (
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={removeFavoriteEvent}
                    >
                        <Icon
                            icon={starFilled}
                            style={{
                                fontSize: '3.5rem',
                                color: '#f50057',
                            }}
                        />
                    </div>
                )}
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <div>
                        <ExpandMoreIcon />
                    </div>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h6">
                        Are you attending this event?
                    </Typography>
                    <StatusButtons
                        id={props.id}
                        currentUserId={props.currentUserId}
                    />
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default RecentCard;