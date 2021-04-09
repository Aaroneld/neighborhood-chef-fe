import React from 'react';
import { print } from 'graphql';
import { axiosWithAuth } from '../../../../utilities/axiosWithAuth';
import makeStyles from '@material-ui/styles/makeStyles';
import { UPDATE_USER } from '../../../../graphql/users/user-mutations';
import { buttonStyles } from '../../../../styles';
import Typography from '@material-ui/core/Typography';

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
      height: '140px',
      outline: 'none',
      border: '2px solid #f0f0f0',
      padding: '10px',
    },
    '& div': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

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
        outline: 'none',
        height: '40px',
      },
    },
  },
}));

const UserBioForm = ({ user, setUser, setShowForm, loggedInUserId, state, setState }) => {
  const btnStyles = buttonStyles();
  const classes = styles();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: 'post',
      data: {
        query: print(UPDATE_USER),
        variables: {
          input: {
            id: Number(loggedInUserId),
            biography: state.biography,
          },
        },
      },
    }).then(
      (res) => {
        setUser({ ...user, biography: state.biography });
        setState({ biography: '', charsLeft: 255 });
        setShowForm(false);
      },
      (err) => {
        console.dir(err);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Typography>{state.charsLeft} characters left</Typography>
      <textarea
        name="biography"
        type="text"
        placeholder="Add a biography to your profile"
        value={state.biography}
        onChange={(e) => {
          if (e.target.value.length <= 255) {
            setState({ biography: e.target.value, charsLeft: 255 - e.target.value.length });
          }
        }}
        autoFocus
        style={{ resize: 'none' }}
      />
      <div>
        <button onClick={() => setShowForm(false)} className={btnStyles.root}>
          Cancel
        </button>
        <button
          style={{ opacity: !state.biography ? '.3' : '1' }}
          disabled={!state.biography}
          style={{ background: '#58D573', color: 'white', border: '#58D573' }}
          className={`${btnStyles.root}`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserBioForm;
