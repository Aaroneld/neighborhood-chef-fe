import React from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import { ErrorMessage } from '@hookform/error-message';
import DatePicker from './datepicker';

export default function DateInput({ errors, setValues, validate }) {
  const styles = formPageOneStyles();

  return (
    <>
      <div className={styles.timeDiv}>
        <DatePicker
          setDate={(date) => {
            setValues((values) => ({ ...values, date }));
          }}
          onMouseLeave={() => {
            validate('date');
          }}
        />
      </div>
      {errors.date && errors.date.length && (
        <ErrorMessage
          name="date"
          errors={errors}
          message={errors.date[0]}
          render={({ message }) => (
            <p className="error-message" style={{ color: 'crimson' }}>
              {message}
            </p>
          )}
        />
      )}
    </>
  );
}
