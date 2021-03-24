import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Divider, Button } from '@material-ui/core';
import ReactMapGL, { Marker } from 'react-map-gl';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { buttonStyles } from '../../../styles';

import Typography from '@material-ui/core/Typography';
import EventImageUpload from '../../shared/event-image-upload/EventImageUpload';

import MapboxGeocoder from './mapbox-geocoder/mapbox-geocoder';

import { ErrorMessage } from '@hookform/error-message';

import { Icon } from '@iconify/react';
import chefIcon from '@iconify/icons-whh/chef';

const ProfileFields = (props) => {
  const classes = buttonStyles();

  const [photo, setPhoto] = useState('');

  const changePhoto = (photo) => {
    setPhoto(photo);
    props.setFieldValue('photo', photo);
  };

  const mapStyle = {
    width: '40vw',
    height: '70vh',
  };

  const handleChange = (e) => {
    e.persist();
    props.setValues((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  const handleBlur = (e) => {
    props.validate(e.target.name);
  };
  return (
    <>
      <TextField
        onChange={handleChange}
        type="name"
        name="firstName"
        className="firstName"
        label="First Name"
        onBlur={handleBlur}
      />
      {props.errors.firstName && props.errors.firstName.length > 0 && (
        <ErrorMessage
          name="firstName"
          errors={props.errors}
          message={props.errors.firstName[0]}
          render={({ message }) => <p style={{ color: 'crimson' }}>{message}</p>}
        />
      )}
      <TextField
        onChange={handleChange}
        type="name"
        name="lastName"
        className="lastName"
        label="Last Name"
        onBlur={handleBlur}
      />
      {props.errors.lastName && props.errors.lastName.length > 0 && (
        <ErrorMessage
          name="lastName"
          errors={props.errors}
          message={props.errors.lastName[0]}
          render={({ message }) => <p style={{ color: 'crimson' }}>{message}</p>}
        />
      )}

      <div>
        <label>
          <Typography v>Address*</Typography>
        </label>
      </div>

      <div className="geocoder-container">
        <MapboxGeocoder
          values={props.values}
          setValues={props.setValues}
          errors={props.errors}
          validate={props.validate}
        />
      </div>

      {props.values.latitude && props.values.longitude && (
        <ReactMapGL
          id="register-map"
          style={{
            position: 'absolute',
            right: 50,
            top: 120,
          }}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          latitude={props.values.latitude}
          longitude={props.values.longitude}
          zoom={17}
          {...mapStyle}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker
            longitude={props.values.longitude}
            latitude={props.values.latitude}
            offsetLeft={-15}
            offsetTop={-15}
          >
            <span style={{ color: '#58D473' }}>
              <Icon width="2em" icon={chefIcon} />
            </span>
          </Marker>
        </ReactMapGL>
      )}
      <FormControl>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          value={props.values.gender}
          onChange={handleChange}
          label="Gender"
          name="gender"
        >
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
          <MenuItem value={'other'}>Other</MenuItem>
        </Select>
      </FormControl>
      <EventImageUpload
        avatar={photo}
        setPhoto={changePhoto}
        title="Upload a picture for your avatar (optional)"
      />

      <Divider />

      <div>
        <Button className={`${classes.root} ${classes.notActive}`} onClick={() => props.setStepper(1)}>
          <Typography variant="h5">Back</Typography>
        </Button>
        <Button
          className={`${classes.root} ${classes.active}`}
          variant="contained"
          color="primary"
          onClick={props.handleSubmit}
          disabled={Object.keys(props.errors) > 0}
        >
          Create Account
        </Button>

        {props.errorMessage && (
          <ErrorMessage
            name="errorMessage"
            errors={{ errorMessage: props.errorMessage }}
            message={props.errorMessage}
            render={({ message }) => <p style={{ color: 'crimson' }}>{message}</p>}
          />
        )}
      </div>
    </>
  );
};

export default ProfileFields;
