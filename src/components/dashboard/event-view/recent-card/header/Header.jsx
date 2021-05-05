import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { cardStyles } from '../../../../../styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@iconify/react';
import { timeAgo, parseTime } from '../../../../../utilities/functions';
import softwareUpload from '@iconify-icons/gg/software-upload';

const Header = (props) => {
  const classes = cardStyles();
  const shownTime = timeAgo(props.createDateTime);
  const { push } = useHistory();

  return (
    <>
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
    </>
  );
};

export default Header;
