import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { styles } from './settings.styles';
import useForm from '../../hooks/useForm.js';

const validationSchema = yup.object().shape({
  firstName: yup.string().required("'First name' is a required field"),
  lastName: yup.string().required("'Last name' is a required field"),
  biography: yup.string(),
  address: yup
    .string()
    .required("'Address' is a required field - Selecting an option from the dropdown menu is required'"),
  gender: yup.string(),
  latitude: yup.number().required(),
  longitude: yup.mixed().required(),
});

const Settings = () => {
  const [charsLeft, setCharsLeft] = useState(255);
  const user = useSelector((state) => state.user);
  const { values, setValues, validate, errors } = useForm(validationSchema);
  const classes = styles();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setValues({
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        address: user.address,
        longitude: user.longitude,
        latitude: user.latitude,
        biography: user.biography,
      });
      console.log(user.biography.length);
      setCharsLeft(255 - user.biography.length);
    }
  }, [user]);

  return (
    <Card className={classes.root}>
      <form className="main" onSubmit={handleSubmit}>
        <div className="textInputContainer">
          <Typography variant="h6">First Name</Typography>
          <input type="text" name="firstName" value={values.firstName} onChange={handleChange} />
        </div>
        <div className="textInputContainer">
          <Typography variant="h6">Last Name</Typography>
          <input type="text" name="lastName" value={values.lastName} onChange={handleChange} />
        </div>
        <div className="textInputContainer">
          <Typography variant="h6">Address</Typography>
          <Typography>{user.address}</Typography>
        </div>
        <div className="textInputContainer">
          <Typography variant="h6">Gender</Typography>
          <select name="gender" value={values.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {user.biography && (
          <div className="textInputContainer">
            <Typography variant="h6">Biography</Typography>
            <textarea
              className="textarea"
              name="biography"
              value={values.biography}
              onChange={(e) => {
                console.log(charsLeft);
                if (e.target.value.length <= 255) {
                  setValues({ ...values, biography: e.target.value });
                  setCharsLeft(e.target.value.length);
                }
              }}
            />
          </div>
        )}
        <button type="submit">Save</button>
      </form>
    </Card>
  );
};

export default Settings;
