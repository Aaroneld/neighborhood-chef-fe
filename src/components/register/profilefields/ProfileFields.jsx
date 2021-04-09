import React from 'react';

import TextField from '@material-ui/core/TextField';
import { Divider, Button } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { buttonStyles } from '../../../styles';
import { styles } from './profilefields.styles';

import Typography from '@material-ui/core/Typography';
import EventImageUpload from '../../shared/event-image-upload/EventImageUpload';

import MapboxGeocoder from './mapbox-geocoder/mapbox-geocoder';

import { ErrorMessage } from '@hookform/error-message';

const ProfileFields = (props) => {
  const buttonClasses = buttonStyles();
  const classnames = styles();

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
    <div className={classnames.container}>
      <div className="name-fields">
        <div>
          <TextField
            onChange={handleChange}
            type="name"
            name="firstName"
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
        </div>
        <div>
          <TextField
            onChange={handleChange}
            type="name"
            name="lastName"
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
        </div>
      </div>

      <MapboxGeocoder
        values={props.values}
        setValues={props.setValues}
        errors={props.errors}
        validate={props.validate}
      />

      <FormControl className="gender-field">
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
        values={props.values}
        setValues={props.setValues}
        caption={'Upload a picture for your avatar (optional)'}
      />

      <Divider />

      <div className="buttons">
        <Button
          className={`${buttonClasses.root} ${buttonClasses.notActive}`}
          onClick={() => props.setStepper(1)}
        >
          <Typography variant="h5">Back</Typography>
        </Button>
        <Button
          className={`${buttonClasses.root} ${buttonClasses.active}`}
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
    </div>
  );
};

export default ProfileFields;
