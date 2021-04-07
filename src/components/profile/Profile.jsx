import React, { useEffect, useState } from 'react';
import { print } from 'graphql';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { USER_BY_ID } from '../../graphql/users/user-queries';
import { styles } from './profile.styles.js';
import UserBioForm from './user-bio-form/UserBioForm';
import Spinner from '../shared/spinner/Spinner';
import EventCard from './event-card/EventCard';
import globeIcon from '@iconify/icons-flat-color-icons/globe';
import { Icon } from '@iconify/react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WcIcon from '@material-ui/icons/Wc';
import { buttonStyles } from '../../styles';
import curry from '../../assets/curry.jpg';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [parsedAddressURL, setParsedAddressURL] = useState('');
  const [formState, setFormState] = useState({ biography: '', charsLeft: 255 });
  const { userid } = useParams();
  const loggedInUserId = useSelector((state) => state.user.id);
  const classes = styles();
  const btnStyles = buttonStyles();

  useEffect(() => {
    if (userid) {
      setLoading(true);
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
    }
  }, [userid]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        {user && (
          <Card className={classes.root}>
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

              {!user.biography && user.id === loggedInUserId && !showForm && (
                <Typography variant="h6" onClick={() => setShowForm(true)}>
                  Add Bio
                </Typography>
              )}

              {!user.biography && user.id === loggedInUserId && showForm && (
                <UserBioForm
                  state={formState}
                  setState={setFormState}
                  user={user}
                  setUser={setUser}
                  setShowForm={setShowForm}
                  userId={userid}
                  loggedInUserId={loggedInUserId}
                />
              )}
            </div>
            <div className="bottomSection">
              <div className="leftSide">
                <div className="details">
                  {user.biography && (
                    <div className="bio">
                      <Typography variant="h6">Description</Typography>
                      <Typography>{user.biography}</Typography>
                    </div>
                  )}

                  <div className="textIconContainer" style={{ cursor: 'pointer' }}>
                    <Typography variant="h6">Address</Typography>
                    <div>
                      <span>
                        <Icon height="20" icon={globeIcon} />
                      </span>
                      <a href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
                        {user.address}
                      </a>
                    </div>
                  </div>

                  <div
                    className="textIconContainer"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`mailto:${user.email}`);
                    }}
                  >
                    <Typography variant="h6">Contact</Typography>
                    <div>
                      <MailOutlineIcon style={{ fontSize: '2rem' }} />
                      <Typography>{user.email}</Typography>
                    </div>
                  </div>
                  <div className="textIconContainer">
                    <Typography variant="h6">Gender</Typography>
                    <div>
                      <WcIcon style={{ fontSize: '2rem' }} />
                      <Typography>{user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</Typography>
                    </div>
                  </div>
                </div>
                {loggedInUserId === userid && (
                  <div className="buttons">
                    <button className={`${btnStyles.root} ${btnStyles.single}`}>Edit Profile</button>
                  </div>
                )}
              </div>
              <div className="rightSide">
                <Typography variant="h6">Events</Typography>
                {user.UserEvents.owned.length > 0 ? (
                  <div>
                    <div className="eventContainer">
                      {user.UserEvents.owned
                        .sort((a, b) => a.startTime - b.startTime)
                        .map((event) => (
                          <EventCard event={event} />
                        ))}
                    </div>
                  </div>
                ) : (
                  <Typography variant="h6">{`${user.firstName} has 0 events`}</Typography>
                )}
              </div>
            </div>
          </Card>
        )}
      </>
    );
  }
};

export default Profile;
