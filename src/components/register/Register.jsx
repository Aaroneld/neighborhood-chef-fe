import React, { useState } from 'react';

import AuthFields from './authfields/AuthFields';
import ProfileFields from './profilefields/ProfileFields';

import { MobileStepper } from '@material-ui/core';
import { cardStyles } from '../../styles';
import AuthHeader from '../shared/AuthHeader';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import food from '../../assets/food.jpg';
import { landingPageStyles } from '../../styles';

import useForm from '../../hooks/useForm';
import * as yup from 'yup';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

{
  /* <Formik */
}
// initialValues={{
//   location: {
//     latitude: null,
//     longitude: null,
//   },
// }}
// validate={(values) => {
//   const errors = {};

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   }
//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   }
//   if (!values.location.latitude) {
//     errors.latitude = 'Required';
//   }
//   if (!values.location.longitude) {
//     errors.longitude = 'Required';
//   }
//   if (!values.location.address) {
//     errors.address = 'Required';
//   }

//   return errors;
// }}
// onSubmit={(values, { setSubmitting }) => {
//   const userValues = {
//     email: values.email,
//     firstName: values.firstName,
//     lastName: values.lastName,
//     latitude: values.location.latitude,
//     longitude: values.location.longitude,
//     gender: values.gender,
//     address: values.location.address,
//     photo: values.photo,
//   };

//   axios
//     .post(`${process.env.REACT_APP_BASE_URL}/auth/register`, userValues)
//     .then((res) => {
//       setSubmitting(false);
//       history.push('/register-check-email');
//     })
//     .catch((err) => {
//       setSubmitting(false);
//       setErrMessage(err.response.data.message);
//       console.dir({
//         err,
//         message: err.message,
//         stack: err.stack,
//       });
//     });
// }}
// >
// {({ isSubmitting, setFieldValue, values }) => (
//   <Form
//     style={{
//       display: 'flex',
//       flexDirection: 'column',
//     }}
//   >
//     {currentPage === 1 && <AuthFields />}
//     {currentPage === 2 && (
//       <ProfileFields
//         submitting={isSubmitting}
//         setFieldValue={setFieldValue}
//         values={values}
//         errMessage={errMessage}
//       />
//     )}
//   </Form>
// )}
// </Formik>

const Register = () => {
  const cardClass = cardStyles();
  const styles = landingPageStyles();

  const [stepper, setStepper] = useState(1);
  const [errorMessage, setErrorMessage] = useState(null);

  const history = useHistory();

  const { values, setValues, validate, errors } = useForm(
    { email: '', address: '', longitude: null, latitude: null, gender: '', firstName: '', lastName: '' },
    yup.object().shape({
      email: yup.string().email().required(),
      address: yup.string().required(),
      longitude: yup.number().required(),
      latitude: yup.number().required(),
      gender: yup.string(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
    })
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const userValues = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      latitude: values.latitude,
      longitude: values.longitude,
      gender: values.gender,
      address: values.address,
      photo: values.photo,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/register`, userValues)
      .then((res) => {
        // history.push('/register-check-email');
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        console.dir({
          err,
          message: err.message,
          stack: err.stack,
        });
      });
  };

  return (
    <div>
      <AuthHeader />
      <div className={styles.landingPageContainer}>
        <div className={styles.landingPageLeft}>
          <Card className={`${cardClass.root} ${cardClass.landingPage}`}>
            <CardContent>
              <Typography variant="h4">Create a new account with us</Typography>
              <Typography variant="caption" color="textSecondary">
                Start eating well while making friends!
              </Typography>
            </CardContent>

            <form>
              {stepper === 1 && (
                <AuthFields
                  setStepper={setStepper}
                  setValues={setValues}
                  validate={validate}
                  errors={errors}
                />
              )}
              {stepper === 2 && (
                <ProfileFields
                  setValues={setValues}
                  errors={errors}
                  values={values}
                  validate={validate}
                  handleSubmit={handleSubmit}
                  setStepper={setStepper}
                  errorMessage={errorMessage}
                />
              )}
            </form>
            <CardActions>
              <MobileStepper variant="dots" steps={2} position="static" activeStep={stepper - 1} />
            </CardActions>
          </Card>
        </div>
        <div className={styles.landingPageRight} style={{ overflow: 'hidden' }}>
          <img src={food} alt="food community" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default Register;
