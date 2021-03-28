import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import uploadOutlined from '@iconify/icons-ant-design/upload-outlined';
import { buttonStyles } from '../../../styles';
import Typography from '@material-ui/core/Typography';
import { useLocation } from 'react-router-dom';
import { eventImageUploadStyles } from './EventImageUpload.styles';

import { chooseDefaultPicture } from '../../../utilities/functions';
import sushi from '../../../assets/sushi.jpg';
import { useField } from 'formik';

const EventImageUpload = ({ avatar, values, setPhoto, title }) => {
  const styles = eventImageUploadStyles();
  const location = useLocation();
  const thisURL = location.pathname.split('/')[1];
  const fileRef = useRef();

  const classes = buttonStyles();
  const imageSizeLimit = 1500000;
  let photo;

  if (values && thisURL === 'create-event') {
    photo = avatar !== 'null' && avatar !== null ? avatar : chooseDefaultPicture(values.title.charAt(0));
  } else if (avatar) photo = avatar;

  const handleChange = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].size > imageSizeLimit) {
        alert('File size is too large');
      } else {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPhoto(reader.result);
        };
      }
    }
  };

  return (
    <div className={styles.root}>
      <Typography className={styles.p}>{title}</Typography>
      <div className={styles.imgBtn}>
        {sushi && (
          <>
            <img
              onClick={() => fileRef.current.click()}
              src={sushi}
              alt="Event Img Upload"
              className={styles.img}
            />
            <input
              type="file"
              name="file"
              id="eventImageUpload"
              multiple={false}
              onChange={handleChange}
              accept="image/jpeg, image/gif, image/png, image/jpg"
              style={{ display: 'none' }}
              ref={fileRef}
            />
          </>
        )}
        {/* <div className={styles.button}>
          <input
            type="file"
            name="file"
            id="eventImageUpload"
            multiple={false}
            onChange={handleChange}
            accept="image/jpeg, image/gif, image/png, image/jpg"
            style={{ display: 'none' }}
          />
          <label
            htmlFor="eventImageUpload"
            className={`${classes.root} ${classes.notActive}`}
            style={{ border: '1px solid rgba(0,0,0,.5)' }}
          >
            <Icon icon={uploadOutlined} style={{ fontSize: '2.5rem' }} />
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default EventImageUpload;
