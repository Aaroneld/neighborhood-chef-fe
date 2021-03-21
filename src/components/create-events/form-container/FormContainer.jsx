import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEventSuccess } from '../../../utilities/actions';

// component and helper function imports
import FormPageOne from './form-page-one/FormPageOne';
import FormPageTwo from './form-page-two/FormPageTwo';
import FormPageThree from './form-page-three/FormPageThree';
import FormPageFour from './form-page-four/FormPageFour';
import { formContainerStyles } from './FormContainer.styles';

import { print } from 'graphql';
import { CREATE_EVENT } from '../../../graphql/events/event-mutations';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';
import jwtdecode from 'jwt-decode';
import useForm from '../../../hooks/useForm.js';
import * as yup from 'yup';

const initValuesForNonEditMode = {
  title: '',
  description: '',
  address: '',
  date: '',
  startTime: '',
  endTime: '',
  category: '',
  latitude: '',
  longitude: '',
  hashtags: [],
  modifiers: [],
  allergenWarnings: [],
  dietaryWarnings: [],
  photo: null,
};

const validationSchema = yup.object().shape({
  title: yup.string().required("'Title' is a required field"),
  description: yup.string().required("'Description' is a required field"),
  address: yup
    .string()
    .required("'Address' is a required field - Selecting an option from the dropdown menu is required'"),
  date: yup.string().required("'Date' is a required field"),
  startTime: yup.string().required("'Start Time' is a required field"),
  endTime: yup.string(),
  category: yup.string(),
  latitude: yup.number().required(),
  longitude: yup.mixed().required(),
});

const createOrUpdateEvent = (values, user, dispatch, setValues, setStepper) => {
  const requestValues = { ...values };
  delete requestValues.date;
  delete requestValues.iat;

  if (requestValues.id) {
    requestValues.id = Number(requestValues.id);
  }

  axiosWithAuth()({
    url: `${process.env.REACT_APP_BASE_URL}/graphql`,
    method: 'post',
    data: {
      query: print(CREATE_EVENT),
      variables: {
        input: {
          ...requestValues,
          user_id: Number(user.id),
          createDateTime: new Date().toISOString(),
          startTime: new Date(`${values.date} ${values.startTime}`),
          endTime: values.endTime ? new Date(`${values.date} ${values.endTime}`) : null,
        },
      },
    },
  })
    .then((res) => {
      console.log(res);
      dispatch(
        createEventSuccess({
          ...requestValues,
          id: res.data.data.inputEvent.id,
          createDateTime: Date.now().toString(),
          startTime: new Date(`${values.date} ${values.startTime}`).getTime(),
          endTime: values.endTime ? new Date(`${values.date} ${values.endTime}`).getTime() : null,
          status: 'UNDECIDED',
        })
      );
      setValues({ ...values, id: res.data.data.inputEvent.id, createDateTime: Date.now().toString() });
      setStepper(4);
    })
    .catch((err) => {
      console.dir(err);
    });
};

const FormContainer = () => {
  const styles = formContainerStyles();
  const user = useSelector((state) => state.user);
  const [stepper, setStepper] = useState(1);
  const [initialValues, setInitialValues] = useState(initValuesForNonEditMode);
  const [loadedFlag, flag] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const { values, setValues, validate, errors } = useForm(initialValues, validationSchema);

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.pathname.split('/')[2]) {
      setInitialValues(jwtdecode(window.location.pathname.split('/')[2]));
    }
  }, []);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  useEffect(() => {
    if ((loadedFlag === 0 && values.title !== '') || !window.location.pathname.split('/')[2]) {
      flag(1);
      setLoaded(true);
    }
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrUpdateEvent(values, user, dispatch, setValues, setStepper);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {loaded && (
        <>
          {stepper === 1 && (
            <FormPageOne
              setStepper={setStepper}
              values={values}
              setValues={setValues}
              validate={validate}
              errors={errors}
            />
          )}
          {stepper === 2 && <FormPageTwo setStepper={setStepper} values={values} setValues={setValues} />}
          {stepper === 3 && (
            <FormPageThree
              values={values}
              setValues={setValues}
              setStepper={setStepper}
              handleSubmit={handleSubmit}
            />
          )}
          {stepper === 4 && <FormPageFour values={values} />}
        </>
      )}
    </form>
  );
};

export default FormContainer;
