import React, { useEffect, useState } from 'react';
import { print } from 'graphql';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { USER_BY_ID } from '../../graphql/users/user-queries';
import { styles } from './profile.styles.js';
import UserBioForm from './UserBioForm';

const Profile = () => {
  const [user, setUser] = useState(null);
  const { userid } = useParams();
  const classes = styles();
  const loggedInUserId = useSelector((state) => state.user.id);

  useEffect(() => {
    if (userid)
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: 'post',
        data: {
          query: print(USER_BY_ID),
          variables: {
            queryParams: {
              id: Number(userid),
            },
          },
        },
      }).then(
        (res) => {
          setUser(res.data.data.Users[0]);
        },
        (err) => console.dir(err)
      );
  }, [userid]);

  return (
    <div className={classes.root}>
      {user && (
        <Card className="card">
          <div className="header">
            <Avatar
              key={user.id}
              title={`${user.firstName} ${user.lastName}`}
              aria-label="avatar"
              src={user.photo ? null : user.photo}
              className="avatar"
            >
              {!user.photo && (
                <Typography>{`${user.firstName.split('')[0]}${user.lastName.split('')[0]}`}</Typography>
              )}
            </Avatar>
            <Typography variant="h3" className={classes.title}>
              {`${user.firstName} ${user.lastName}`}
            </Typography>
          </div>
          {!user.bio && user.id === loggedInUserId && <UserBioForm setUser={setUser} />}
          {user.bio && <Typography>{user.bio}</Typography>}
          {/* <pre>{JSON.stringify(user, null, 1)}</pre> */}
        </Card>
      )}
    </div>
  );
};

export default Profile;
