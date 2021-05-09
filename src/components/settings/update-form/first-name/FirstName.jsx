import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ErrorMessage } from '@hookform/error-message';

const FirstName = ({ values, validate, errors, handleChange }) => {
  return (
    <div className="textInputContainer">
      <Typography variant="h6">First Name</Typography>
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        onBlur={() => {
          validate('firstName');
        }}
      />
      {errors.firstName && errors.firstName.length > 0 && (
        <ErrorMessage
          name="firstName"
          errors={errors}
          message={errors.firstName[0]}
          render={({ message }) => (
            <p className="error-message" style={{ color: 'crimson' }}>
              {message}
            </p>
          )}
        />
      )}
    </div>
  );
};

export default FirstName;
