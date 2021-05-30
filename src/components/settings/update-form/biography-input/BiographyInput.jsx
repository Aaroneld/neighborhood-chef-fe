import React from 'react';

const BiographyInput = ({ values, setValues, setCharsLeft }) => {
  return (
    <div className="textInputContainer">
      <label htmlFor="biography">Biography</label>
      <textarea
        className="textarea"
        name="biography"
        value={values.biography}
        placeholder="Add a biography to your profile"
        onChange={(e) => {
          if (e.target.value.length <= 511) {
            setValues({ ...values, biography: e.target.value });
            setCharsLeft(e.target.value.length);
          }
        }}
      />
    </div>
  );
};

export default BiographyInput;
