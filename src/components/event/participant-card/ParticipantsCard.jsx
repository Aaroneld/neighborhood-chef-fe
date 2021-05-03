import React from 'react';
import { Link } from 'react-router-dom';

//style imports
import { cardStyles } from '../../../styles';
import { useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const ParticipantCard = ({ attending }) => {
  const classes = cardStyles();
  const currentUserId = useSelector(state => state.user.id)
  const testAvatar = [
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
    {
      firstName: 'Aaron',
      lastName: 'Merrifield',
    },
  ];

  return (
    <>
      <Card className={`${classes.root} ${classes.participants}`}>
        {testAvatar && attending.length > 0 ? (
          <CardContent className={classes.cardContent + " " + classes.avatarGroup}>
            <AvatarGroup max={4}>
              {attending.filter(user => user.id !== currentUserId).map((user) => {
                return (
                  <Link
                    to={`/profile/${user.id}`}
                    style={{ border: 'none', background: 'transparent', overflow: 'hidden' }}
                  >
                    <Avatar
                      key={user.id}
                      title={`${user.firstName} ${user.lastName}`}
                      aria-label="avatar"
                      className={classes.avatar}
                      style={{
                        cursor: 'pointer',
                        border: '2px solid rgb(88, 212, 115)',
                      }}
                      src={user.photo ? null : user.photo}
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
          </CardContent>
        ) : (
          <Typography>
            No one has indicated they are going to this event yet. Share it with your neighbors!
          </Typography>
        )}
      </Card>
    </>
  );
};

export default ParticipantCard;
