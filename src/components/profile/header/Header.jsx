import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { print } from 'graphql';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserBioForm from './user-bio-form/UserBioForm';
import Typography from '@material-ui/core/Typography';
import curry from '../../../assets/curry.jpg';
import { styles } from '../profile.styles.js';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';
import { UPDATE_USER } from '../../../graphql/users/user-mutations';
import { updateUser } from '../../../utilities/actions';
import { Icon } from '@iconify/react';
import bxsCamera from '@iconify-icons/bx/bxs-camera';

const Header = ({ user, setUser, loggedInUserId }) => {
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState({ biography: '', charsLeft: 255 });
  const [loading, setLoading] = useState(false);
  const imageSizeLimit = 1500000;
  const classes = styles({ photo: user.photo ? user.photo : curry });
  const fileRef = useRef();
  const reduxUser = useSelector((state) => state.user);
  const { push } = useHistory();
  const dispatch = useDispatch();

  const submitImage = (image) => {
    setLoading(true);
    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: 'post',
      data: {
        query: print(UPDATE_USER),
        variables: {
          input: {
            id: Number(user.id),
            photo: image,
          },
        },
      },
    }).then(
      (res) => {
        setLoading(false);
        setUser({ ...user, photo: res.data.data.inputUser.photo });
        dispatch(updateUser({ ...reduxUser, photo: res.data.data.inputUser.photo }));
      },
      (err) => {
        setLoading(false);
        console.dir(err);
      }
    );
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].size > imageSizeLimit) {
        alert('File size is too large');
      } else {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          submitImage(reader.result);
        };
      }
    }
  };

  useEffect(() => {}, [user, reduxUser]);

  return (
    <div className="header">
      {user.photo && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {user.id !== loggedInUserId && (
            <div id="non-loggedin-user-img" className="non-loggedin-user-img"></div>
          )}
          {user.id === loggedInUserId && (
            <div id="upload-image-div" className="upload-image-div" onClick={(e) => fileRef.current.click()}>
              <input
                type="file"
                name="file"
                id="upload-image-div"
                multiple={false}
                onChange={user.id === loggedInUserId && handleChange}
                accept="image/jpeg, image/gif, image/png, image/jpg"
                style={{ display: 'none' }}
                ref={fileRef}
              />
            </div>
          )}
        </div>
      )}
      {user.id === loggedInUserId && !user.photo && (
        <>
          <Icon
            icon={bxsCamera}
            style={{ fontSize: '5rem', cursor: 'pointer' }}
            onClick={() => fileRef.current.click()}
          />
          <input
            type="file"
            name="file"
            id="upload-image-div"
            multiple={false}
            onChange={handleChange}
            accept="image/jpeg, image/gif, image/png, image/jpg"
            style={{ display: 'none' }}
            ref={fileRef}
          />
        </>
      )}
      {loading && (
        <CircularProgress style={{ color: '#58D573', alignSelf: 'center', marginTop: '.4%' }} size={'3rem'} />
      )}
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
      <div style={{ borderTop: '1px solid #F2F2F2', width: '97%', alignSelf: 'center', margin: '1% 0' }} />
    </div>
  );
};

export default Header;
