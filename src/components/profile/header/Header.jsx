import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { print } from 'graphql';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';
import { UPDATE_USER } from '../../../graphql/users/user-mutations';
import { updateUser } from '../../../utilities/actions';

import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Header = ({
  user,
  setUser,
  loggedInUserId,
  handleChange,
  setLoading,
  image,
  imageSizeLimit,
  reduxUser,
}) => {
  const [bannerImageHasLoaded, setBannerImageHasLoaded] = useState(false);
  const [bannerImage, setBannerImage] = useState(null);
  const fileRef = useRef();
  const bannerImageRef = useRef();
  const dispatch = useDispatch();

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
    if (bannerImage && bannerImageHasLoaded) {
      submitBannerImage(bannerImage);
      setBannerImageHasLoaded(false);
    }
    // eslint-disable-next-line
  }, [bannerImageHasLoaded, bannerImage]);

  return (
    <div className="header">
      {user.id === loggedInUserId && (
        <div className="edit-icon">
          <Icon
            icon={pencilIcon}
            onClick={() => {
              user.id === loggedInUserId && bannerImageRef.current.click();
            }}
            style={{ color: 'white', fontSize: '3rem', opacity: 0.7 }}
          />
        </div>
      )}
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {user.id !== loggedInUserId && (
            <div id="non-loggedin-user-img" className="non-loggedin-user-img"></div>
          )}

          {user.id === loggedInUserId && (
            <>
              {user.photo && (
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
    </div>
  );
};

export default Header;
