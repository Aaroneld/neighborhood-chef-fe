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
  const classes = styles();
  const loggedInUserId = useSelector((state) => state.user.id);
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
                <Typography variant="h6" className="addBio" onClick={() => setShowForm(true)}>
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
                  {user.biography && <Typography>{user.biography}</Typography>}
                  <div className="textIconContainer" style={{ cursor: 'pointer' }}>
                    <span>
                      <Icon height="20" icon={globeIcon} />
                    </span>
                    <a href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
                      {user.address}
                    </a>
                  </div>

                  <div
                    className="textIconContainer"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`mailto:${user.email}`);
                    }}
                  >
                    <MailOutlineIcon style={{ fontSize: '2rem' }} />
                    <Typography>{user.email}</Typography>
                  </div>
                  <div className="textIconContainer">
                    <WcIcon style={{ fontSize: '2rem' }} />
                    <Typography>{user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</Typography>
                  </div>
                </div>
                {loggedInUserId === userid && (
                  <div className="buttons">
                    <button className={`${btnStyles.root} ${btnStyles.single}`}>
                      Edit Personal Information
                    </button>
                    {user.biography && (
                      <button className={`${btnStyles.root} ${btnStyles.single}`}>Edit Bio</button>
                    )}
                  </div>
                )}
              </div>
              <div className="rightSide">
                {user.UserEvents.owned.length > 0 && (
                  <div className="eventContainer">
                    {user.UserEvents.owned
                      .sort((a, b) => a.startTime - b.startTime)
                      .map((event) => (
                        <EventCard event={event} />
                      ))}
                  </div>
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
