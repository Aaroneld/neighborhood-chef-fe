import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { print } from 'graphql';
import * as yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useForm from '../../../hooks/useForm.js';
import EventButtons from '../../create-events/form-container/event-buttons/EventButtons';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';
import { UPDATE_USER } from '../../../graphql/users/user-mutations';
import { updateUser } from '../../../utilities/actions';
import FirstName from './first-name/FirstName';
import LastName from './last-name/LastName';
import Biography from './biography/Biography';
import Gender from './gender/Gender';

const initialValues = {
  firstName: '',
  lastName: '',
  gender: '',
  address: '',
  longitude: '',
  latitude: '',
  biography: '',
};

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
  const [, setCharsLeft] = useState(255);
  const user = useSelector((state) => state.user);
  const [message, setMessage] = useState('');
  const { values, setValues, validate, errors } = useForm(initialValues, validationSchema);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setMessage('');
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: 'post',
        data: {
          query: print(UPDATE_USER),
          variables: {
            input: {
              ...values,
              id: Number(user.id),
            },
          },
        },
      }).then(
        (res) => {
          dispatch(
            updateUser({
              ...user,
              ...values,
            })
          );
          setMessage('Your account has been updated!');
        },
        (err) => {
          console.dir(err);
          setMessage('There was an error while submitting your request. Please try again.');
        }
      );
    }
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
      setCharsLeft(255 - user.biography.length);
    }
  }, [user]);

  return (
    <form className="main">
      <FirstName values={values} errors={errors} validate={validate} handleChange={handleChange} />
      <LastName values={values} errors={errors} validate={validate} handleChange={handleChange} />
      <div className="textInputContainer">
        <Typography variant="h6">Address</Typography>
        <Typography>{user.address}</Typography>
      </div>
      <Gender values={values} handleChange={handleChange} />
      <Biography values={values} setValues={setValues} setCharsLeft={setCharsLeft} />
      {message && (
        <Typography className="message" variant="h6">
          {message}
        </Typography>
      )}
      <EventButtons
        leftBtnText="Cancel"
        leftBtnClick={(e) => {
          e.preventDefault();
          setValues({
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            address: user.address,
            longitude: user.longitude,
            latitude: user.latitude,
            biography: user.biography,
          });
        }}
        rightBtnText="Submit"
        rightBtnClick={handleSubmit}
      />
    </form>
  );
};

export default Settings;
