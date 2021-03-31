import React from 'react';
import { Icon } from '@iconify/react';
import uploadOutlined from '@iconify/icons-ant-design/upload-outlined';
import { buttonStyles } from '../../../../../styles';
import Typography from '@material-ui/core/Typography';
import { eventImageUploadStyles } from './EventImgUpload.styles';
import { chooseDefaultPicture } from '../../../../../utilities/functions';

const EventImageUpload = ({ values, setValues }) => {
  const styles = eventImageUploadStyles();
  const classes = buttonStyles();
  const imageSizeLimit = 1500000;
  const photo = values.photo ? values.photo : chooseDefaultPicture(values.title.charAt(0));

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
    <div>
      <Typography className={styles.p}>Upload a main picture for your event page</Typography>
      <div className={styles.imgBtn}>
        <div>
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
            Upload
            <Icon icon={uploadOutlined} style={{ fontSize: '2.5rem', marginLeft: '10px' }} />
          </label>
        </div>

        {photo && (
          <img
            onClick={() => setValues({ ...values, photo: null })}
            src={photo}
            alt="Event Img Upload"
            className={styles.img}
          />
        )}
      </div>
    </div>
  );
};

export default EventImageUpload;
