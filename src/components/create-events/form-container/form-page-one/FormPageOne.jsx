import React from 'react';
import { useHistory } from 'react-router-dom';

import TitleInput from './title-input/title-input';
import DescriptionInput from './description-input/description-input';
import DateInput from './date-input/date-input';
import TimeInputs from './time-inputs/time-inputs';
import CatagoryInput from './category-input/catagory-input';
import MapboxGeocoder from './mapbox-geocoder/mapbox-geocoder';

import { formPageOneStyles } from './FormPageOne.styles';
import EventButtons from '../event-buttons/EventButtons';
import { changePage } from '../../../../utilities/actions';
import { useDispatch } from 'react-redux';

const FormPageOne = ({ errors, values, setValues, validate }) => {
  const { push } = useHistory();
  const styles = formPageOneStyles();
  const dispatch = useDispatch();

  const validateAndTurnPage = () => {
    const isValid = validate();

    if (isValid) {
      dispatch(changePage(2));
    }
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.leftContainer}>
          <TitleInput errors={errors} values={values} setValues={setValues} validate={validate} />
          <MapboxGeocoder errors={errors} values={values} setValues={setValues} validate={validate} />
          <DescriptionInput errors={errors} values={values} setValues={setValues} validate={validate} />
        </div>

        <div className={styles.rightContainer}>
          <DateInput errors={errors} values={values} setValues={setValues} validate={validate} />
          <TimeInputs errors={errors} values={values} setValues={setValues} validate={validate} />
          <CatagoryInput errors={errors} values={values} setValues={setValues} validate={validate} />
          <EventButtons
            leftBtnText="Cancel"
            leftBtnClick={() => {
              push('/dashboard');
            }}
            rightBtnText="Next"
            rightBtnClick={validateAndTurnPage}
          />
        </div>
      </div>
    </>
  );
};

export default FormPageOne;
