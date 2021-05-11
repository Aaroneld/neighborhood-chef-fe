import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

const LastNameInput = ({ values, validate, errors, handleChange }) => {
  return (
    <div className="textInputContainer">
      <label htmlFor="lastName">Last Name</label>
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
