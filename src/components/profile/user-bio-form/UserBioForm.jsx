import React, { useState } from 'react';

import makeStyles from '@material-ui/styles/makeStyles';
import { buttonStyles } from '../../../styles';

export const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    '& textarea': {
      fontFamily: 'poppins, sans-serif',
      borderRadius: '6px',
      width: '80%',
      height: '160px',
      outline: 'none',
      border: '2px solid #f0f0f0',
      padding: '10px',
    },
    '& div': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',

      '& :first-child': {
        color: '#b3b3b3',
        border: '2px solid #e5e5e5',
        background: 'white',
      },

      '& button': {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '2rem',
        width: '20%',
        marginTop: '10px',
        fontWeight: 'bold',
      },
    },
  },
}));

const UserBioForm = ({ setUser, setShowForm }) => {
  const [bio, setBio] = useState('');
  const btnStyles = buttonStyles();
  const classes = styles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBio('');
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <textarea
        name="bio"
        type="text"
        placeholder="Add a biography to your profile"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        autoFocus
      />
      <div>
        <button onClick={() => setShowForm(false)} className={`${btnStyles.root} ${classes.leftBtn}`}>
          Cancel
        </button>
        <button
          style={{ opacity: !bio ? '.3' : '1' }}
          disabled={!bio}
          className={`${btnStyles.root} ${btnStyles.active}`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserBioForm;
