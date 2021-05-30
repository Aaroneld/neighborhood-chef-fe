import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import globeIcon from '@iconify/icons-flat-color-icons/globe';
import { Icon } from '@iconify/react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WcIcon from '@material-ui/icons/Wc';
import Header from '../header/Header';
import { styles } from '../profile.styles.js';
import UserBioForm from '../header/user-bio-form/UserBioForm';

const LeftSide = ({ user, parsedAddressURL, setUser, loggedInUserId, userid }) => {
  const { push } = useHistory();
  const classes = styles();

  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState({ biography: '', charsLeft: 255 });

  return (
    <div className="leftSide">
      <Header user={user} setUser={setUser} loggedInUserId={loggedInUserId} userid={userid} />
      <div className="non-header-content">
        <Typography variant="h2" className={classes.title}>
          {`${user.firstName} ${user.lastName}`}
        </Typography>
        <div>
          {loggedInUserId === user.id && (
            <Typography variant="h6" onClick={() => push('/settings')} id="edit-profile">
              Edit Profile
            </Typography>
          )}
          {!user.biography && !showForm && loggedInUserId === user.id && (
            <Typography variant="h5">|</Typography>
          )}
          {!user.biography && user.id === loggedInUserId && !showForm && (
            <Typography variant="h6" onClick={() => setShowForm(true)}>
              Add Bio
            </Typography>
          )}
        </div>
        {!user.biography && user.id === loggedInUserId && showForm && (
          <UserBioForm
            state={formState}
            setState={setFormState}
            user={user}
            setUser={setUser}
            setShowForm={setShowForm}
            loggedInUserId={loggedInUserId}
          />
        )}
        <div className="details">
          {user.biography && (
            <div className="bio">
              <Typography variant="h6">Description</Typography>
              <Typography>{user.biography}</Typography>
            </div>
          )}

          <div className="userDetailsText">
            <div className="textIconContainer">
              <Typography variant="h6">Address</Typography>
              <div>
                <Icon style={{ fontSize: '3.5rem', marginRight: '1%' }} icon={globeIcon} />
                <a href={parsedAddressURL} target="_blank" rel="noopener noreferrer">
                  {user.address}
                </a>
              </div>
            </div>

            <div
              className="textIconContainer"
              onClick={(e) => {
                e.preventDefault();
                window.open(`mailto:${user.email}`);
              }}
            >
              <Typography variant="h6">Contact</Typography>
              <div>
                <MailOutlineIcon style={{ fontSize: '3rem', marginRight: '1%' }} />
                <Typography style={{ cursor: 'pointer', maxWidth: '95%' }}>{user.email}</Typography>
              </div>
            </div>

            <div className="textIconContainer">
              <Typography variant="h6">Gender</Typography>
              <div>
                <WcIcon style={{ fontSize: '3rem', marginRight: '1%' }} />
                <Typography>{user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</Typography>
              </div>
            </div>
          </div>

          {user.UserEvents.owned.length === 0 && (
            <div className="textIconContainer">
              <Typography variant="h6">Events</Typography>
              <div>
                <Typography>{`${user.firstName} has not created any events`}</Typography>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
