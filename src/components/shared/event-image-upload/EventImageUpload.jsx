import React, { useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import { eventImageUploadStyles } from './EventImageUpload.styles';
import sushi from '../../../assets/sushi.jpg';

const EventImageUpload = ({ values, setValues }) => {
  const styles = eventImageUploadStyles();
  const fileRef = useRef();
  const imageSizeLimit = 1500000;

  const handleChange = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].size > imageSizeLimit) {
        alert('File size is too large');
      } else {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setValues({ ...values, photo: reader.result });
        };
      }
    }
  };

  return (
    <div className={styles.root}>
      <Typography className={styles.p}>Upload a picture for your avatar (optional)</Typography>
      <div className={styles.imgBtn}>
        {sushi && (
          <>
            <img
              onClick={() => fileRef.current.click()}
              src={values.photo ? values.photo : sushi}
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
      </div>
    </div>
  );
};

export default EventImageUpload;
