import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ErrorMessage } from '@hookform/error-message';

const LastNameInput = ({ values, validate, errors, handleChange }) => {
  return (
    <div className="textInputContainer">
      <Typography variant="h6">Last Name</Typography>
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        onBlur={() => {
          validate('lastName');
        }}
      />
      {errors.lastName && errors.lastName.length > 0 && (
        <ErrorMessage
          name="lastName"
          errors={errors}
          message={errors.lastName[0]}
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

export default LastNameInput;
