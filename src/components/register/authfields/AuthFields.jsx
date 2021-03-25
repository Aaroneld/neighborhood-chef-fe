import React, { useState } from 'react';

import { styles } from './authfields.styles';

import TextField from '@material-ui/core/TextField';
import { Checkbox, Button } from '@material-ui/core';
import { buttonStyles } from '../../../styles';
import Typography from '@material-ui/core/Typography';

import { ErrorMessage } from '@hookform/error-message';

const AuthFields = ({ setStepper, setValues, errors, validate }) => {
  const buttonClass = buttonStyles();
  const classNames = styles();

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    e.persist();

    setValues((values) => {
      return { ...values, email: e.target.value };
    });
  };

  const handleClick = (e) => {
    validate('email');
    if (!errors.email) {
      setStepper(2);
    }
  };

  return (
    <div className={classNames.container}>
      <TextField
        onChange={handleChange}
        type="email"
        id="email"
        className="email"
        label="Email"
        onBlur={() => {
          validate('email');
        }}
        required
      />
      {errors.email && errors.email.length > 0 && (
        <ErrorMessage
          name="email"
          errors={errors}
          message={errors.email[0]}
          render={({ message }) => <p style={{ color: 'crimson' }}>{message}</p>}
        />
      )}
      <label className="terms">
        <Checkbox
          type="checkbox"
          name="terms"
          onChange={() => {
            setChecked(!checked);
          }}
        />
        I accept the terms and conditions.
      </label>
      <Button
        className={`${buttonClass.root} ${buttonClass.active}`}
        disabled={Object.keys(errors).length > 0 || !checked}
        onClick={handleClick}
      >
        Continue registering
      </Button>
    </div>
  );
};

export default AuthFields;
