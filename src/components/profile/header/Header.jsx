import React, { useState } from 'react';
import UserBioForm from './user-bio-form/UserBioForm';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import curry from '../../../assets/curry.jpg';
import { styles } from '../profile.styles.js';

const Header = ({ user, setUser, userid, loggedInUserId }) => {
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState({ biography: '', charsLeft: 255 });
  const classes = styles();

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
  );
};

export default Header;