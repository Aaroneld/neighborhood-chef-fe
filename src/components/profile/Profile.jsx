import React, { useEffect, useState } from 'react';
import { print } from 'graphql';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import curry from '../../assets/curry.jpg';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { USER_BY_ID } from '../../graphql/users/user-queries';
import { styles } from './profile.styles.js';
import UserBioForm from './user-bio-form/UserBioForm';
import Spinner from '../shared/spinner/Spinner';
import AccountEventCard from '../shared/grid-structure/header/header-partition-persistent/account-drawer/account-event-card/AccountEventCard';
import globeIcon from '@iconify/icons-flat-color-icons/globe';
import { Icon } from '@iconify/react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [parsedAddressURL, setParsedAddressURL] = useState('');
  const { userid } = useParams();
  const classes = styles();
  const loggedInUserId = useSelector((state) => state.user.id);

  useEffect(() => {
    if (userid) setLoading(true);
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
        setLoading(false);
        setUser(res.data.data.Users[0]);
        setParsedAddressURL(
          `https://www.google.com/maps/search/${res.data.data.Users[0].address.replace(' ', '+')}`
        );
      },
      (err) => {
        console.dir(err);
        setLoading(false);
      }
    );
  }, [userid]);

  if (loading) {
    return <Spinner />;
  } else {
    console.log(user);
    return (
      <div className={classes.root}>
        {user && (
          <Card className="card">
            <div className="header">
              <Avatar
                key={user.id}
                title={`${user.firstName} ${user.lastName}`}
                aria-label="avatar"
                src={user.photo ? user.photo : curry}
                className="avatar"
              />
              <Typography variant="h2" className={classes.title}>
                {`${user.firstName} ${user.lastName}`}
              </Typography>
            </div>
            {!user.biography && user.id === loggedInUserId && !showForm && (
              <Typography variant="h6" className="addBio" onClick={() => setShowForm(true)}>
                Add Bio
              </Typography>
            )}
            {!user.biography && user.id === loggedInUserId && showForm && (
              <UserBioForm
                user={user}
                setUser={setUser}
                setShowForm={setShowForm}
                userId={userid}
                loggedInUserId={loggedInUserId}
              />
            )}
            <div>
              {user.biography && <Typography>{user.biography}</Typography>}
              <div className="address">
                <span>
                  <Icon height="20" icon={globeIcon} />
                </span>
                <a href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
                  {user.address}
                </a>
              </div>
              <Typography>Contact: {user.email}</Typography>
              <Typography>Gender: {user.gender}</Typography>
            </div>
            {user.UserEvents.owned.length > 0 && (
              <div className="eventContainer">
                <p variant="h5">{`${user.firstName}'s Events:`}</p>
                <div className="events">
                  {user.UserEvents.owned.map((event) => (
                    <AccountEventCard event={event} key={event.id} />
                  ))}
                </div>
              </div>
            )}
          </Card>
        )}
      </div>
    );
  }
};

export default Profile;
