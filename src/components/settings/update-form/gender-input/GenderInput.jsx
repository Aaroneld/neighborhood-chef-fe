import React from 'react';
import Typography from '@material-ui/core/Typography';

const GenderInput = ({ values, handleChange }) => {
  return (
    <div className="textInputContainer">
      <Typography variant="h6">Gender</Typography>
      <select name="gender" value={values.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default GenderInput;
