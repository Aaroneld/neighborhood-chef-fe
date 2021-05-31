import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { print } from 'graphql';
import CircularProgress from '@material-ui/core/CircularProgress';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';
import { UPDATE_USER } from '../../../graphql/users/user-mutations';
import { updateUser } from '../../../utilities/actions';
import { Icon } from '@iconify/react';
import bxsCamera from '@iconify-icons/bx/bxs-camera';

const Header = ({ user, setUser, loggedInUserId }) => {
  const [loading, setLoading] = useState(false);
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  const [image, setImage] = useState(null);
  const [bannerImageHasLoaded, setBannerImageHasLoaded] = useState(false);
  const [bannerImage, setBannerImage] = useState(null);
  const imageSizeLimit = 1500000;
  const fileRef = useRef();
  const bannerImageRef = useRef();
  const reduxUser = useSelector((state) => state.user);
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
        console.log(res);
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

  const submitBannerImage = () => {
    setLoading(true);
    axiosWithAuth()({
      url: `${process.env.REACT_APP_BASE_URL}/graphql`,
      method: 'post',
      data: {
        query: print(UPDATE_USER),
        variables: {
          input: {
            id: Number(user.id),
            bannerPhoto: bannerImage,
          },
        },
      },
    }).then(
      (res) => {
        console.log(res);
        setLoading(false);
        setUser({ ...user, bannerPhoto: bannerImage });
        dispatch(updateUser({ ...reduxUser, bannerPhoto: bannerImage }));
        setBannerImage(null);
      },
      (err) => {
        setLoading(false);
        console.dir(err);
      }
    );
  };

  const handleChange = (e) => {
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

  const handleBannerChange = (e) => {
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
          setBannerImageHasLoaded(true);
          setBannerImage(reader.result);
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

  useEffect(() => {
    if (bannerImage && bannerImageHasLoaded) {
      console.log(image);
      submitBannerImage(bannerImage);
      setBannerImageHasLoaded(false);
    }
  }, [bannerImageHasLoaded, bannerImage]);

  return (
    <div
      className="header"
      onClick={() => {
        bannerImageRef.current.click();
      }}
    >
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {user.id !== loggedInUserId && (
            <div id="non-loggedin-user-img" className="non-loggedin-user-img"></div>
          )}

          {user.id === loggedInUserId && (
            <>
              {user.photo ? (
                <div
                  id="upload-image-div"
                  className="upload-image-div"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileRef.current.click();
                  }}
                >
                  <input
                    type="file"
                    name="file"
                    multiple={false}
                    onChange={handleChange}
                    accept="image/jpeg, image/gif, image/png, image/jpg"
                    style={{ display: 'none' }}
                    ref={fileRef}
                  />
                </div>
              ) : (
                <div
                  style={{ margin: '1% 0' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    fileRef.current.click();
                  }}
                >
                  <Icon
                    icon={bxsCamera}
                    style={{ fontSize: '5rem', cursor: 'pointer', color: 'black', zIndex: 3 }}
                  />
                  <input
                    type="file"
                    name="file"
                    multiple={false}
                    onChange={handleChange}
                    accept="image/jpeg, image/gif, image/png, image/jpg"
                    style={{ display: 'none' }}
                    ref={fileRef}
                  />
                </div>
              )}
              <input
                type="file"
                name="file"
                id="upload-image-div"
                multiple={false}
                onChange={handleBannerChange}
                accept="image/jpeg, image/gif, image/png, image/jpg"
                style={{ display: 'none' }}
                ref={bannerImageRef}
              />
            </>
          )}
        </div>
      )}
      {loading && (
        <CircularProgress
          style={{ color: '#58D573', alignSelf: 'center', marginTop: '.4%', marginBottom: '1%' }}
          size={'3rem'}
        />
      )}
    </div>
  );
};

export default Header;
