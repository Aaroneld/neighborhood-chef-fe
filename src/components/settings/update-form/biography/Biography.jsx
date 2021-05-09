import React from 'react';
import Typography from '@material-ui/core/Typography';

const Biography = ({ values, setValues, setCharsLeft }) => {
  return (
    <div className="textInputContainer">
      <Typography variant="h6">Biography</Typography>
      <textarea
        className="textarea"
        name="biography"
        value={values.biography}
        placeholder="Add a biography to your profile"
        onChange={(e) => {
          if (e.target.value.length <= 255) {
            setValues({ ...values, biography: e.target.value });
            setCharsLeft(e.target.value.length);
          }
        }}
      />
    </div>
  );
};

export default Biography;
