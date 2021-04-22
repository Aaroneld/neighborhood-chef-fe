import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserBioForm from './user-bio-form/UserBioForm';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import curry from '../../../assets/curry.jpg';
import { styles } from '../profile.styles.js';

const Header = ({ user, setUser, userid, loggedInUserId }) => {
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState({ biography: '', charsLeft: 255 });
  const classes = styles();
  const { push } = useHistory();

  return (
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
      <div>
        {loggedInUserId === user.id && (
          <Typography variant="h6" onClick={() => push('/settings')}>
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
    </div>
  );
};

export default Header;
