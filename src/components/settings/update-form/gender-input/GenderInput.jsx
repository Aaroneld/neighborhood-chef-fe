import React from 'react';

const GenderInput = ({ values, handleChange }) => {
  return (
    <div className="textInputContainer">
      <label htmlFor="gender">Gender</label>
      <select name="gender" value={values.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default GenderInput;
