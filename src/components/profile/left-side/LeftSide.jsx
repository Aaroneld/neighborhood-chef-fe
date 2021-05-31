import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import globeIcon from '@iconify/icons-flat-color-icons/globe';
import { Icon } from '@iconify/react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WcIcon from '@material-ui/icons/Wc';
import Header from '../header/Header';
import { styles } from '../profile.styles.js';
import UserBioForm from '../header/user-bio-form/UserBioForm';
import { useDispatch, useSelector } from 'react-redux';
import { print } from 'graphql';
import CircularProgress from '@material-ui/core/CircularProgress';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';
import { UPDATE_USER } from '../../../graphql/users/user-mutations';
import { updateUser } from '../../../utilities/actions';

const LeftSide = ({ user, parsedAddressURL, setUser, loggedInUserId, userid }) => {
  const { push } = useHistory();
  const classes = styles();
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState({ biography: '', charsLeft: 511 });
  const [loading, setLoading] = useState(false);
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  const [image, setImage] = useState(null);
  const reduxUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const imageSizeLimit = 1500000;
  const fileRef = useRef();

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
        setUser({ ...user, photo: image });
        dispatch(updateUser({ ...reduxUser, photo: image }));
        setImage(null);
      },
      (err) => {
        setLoading(false);
        console.dir(err);
      }
    );
  };

  const handleChange = (e) => {
    console.log('here');
    e.persist();
    e.preventDefault();
    e.stopPropagation();

    if (e.target.files[0]) {
      if (e.target.files[0].size > imageSizeLimit) {
        alert('File size is too large');
      } else {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImageHasLoaded(true);
          setImage(reader.result);
        };
      }
    }
  };

  useEffect(() => {
    if (image && imageHasLoaded) {
      console.log(image);
      submitImage(image);
      setImageHasLoaded(false);
    }
  }, [imageHasLoaded, image]);

  return (
    <div className="leftSide">
      <Header
        user={user}
        setUser={setUser}
        loggedInUserId={loggedInUserId}
        userid={userid}
        loading={loading}
        setLoading={setLoading}
        imageSizeLimit={imageSizeLimit}
        handleChange={handleChange}
        reduxUser={reduxUser}
      />
      {loading && (
        <CircularProgress
          style={{ color: '#58D573', alignSelf: 'center', marginTop: '.4%', marginBottom: '1%' }}
          size={'3rem'}
        />
      )}
      <div className="non-header-content" style={{ marginTop: !user.photo && '3%' }}>
        <Typography variant="h2" className={classes.title}>
          {`${user.firstName} ${user.lastName}`}
        </Typography>
        {user.id === loggedInUserId && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" onClick={() => push('/settings')} id="edit-profile">
              Edit Profile
            </Typography>
            {!user.biography && !showForm && <Typography variant="h5">&nbsp; | &nbsp;</Typography>}
            {!user.biography && !showForm && (
              <Typography style={{ cursor: 'pointer' }} variant="h6" onClick={() => setShowForm(true)}>
                Add Bio
              </Typography>
            )}
            {!user.photo && <Typography variant="h5">&nbsp; | &nbsp;</Typography>}
            {!user.photo && (
              <>
                <Typography
                  style={{ cursor: 'pointer' }}
                  variant="h6"
                  onClick={() => fileRef.current.click()}
                >
                  Add Profile Image
                </Typography>
                <input
                  type="file"
                  name="file"
                  multiple={false}
                  onChange={handleChange}
                  accept="image/jpeg, image/gif, image/png, image/jpg"
                  style={{ display: 'none' }}
                  ref={fileRef}
                />
              </>
            )}
          </div>
        )}

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
                <MailOutlineIcon style={{ fontSize: '3rem', marginRight: '1%', color: 'rgba(0, 0, 0, 1)' }} />
                <Typography style={{ cursor: 'pointer', maxWidth: '95%' }}>{user.email}</Typography>
              </div>
            </div>

            <div className="textIconContainer">
              <Typography variant="h6">Gender</Typography>
              <div>
                <WcIcon style={{ fontSize: '3rem', marginRight: '1%', color: 'rgba(0, 0, 0, 1)' }} />
                <Typography>{user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</Typography>
              </div>
            </div>
          </div>

          {/* {user.UserEvents.owned.length === 0 && (
            <div className="textIconContainer">
              <Typography variant="h6">Events</Typography>
              <div>
                <Typography>{`${user.firstName} has not created any events`}</Typography>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
