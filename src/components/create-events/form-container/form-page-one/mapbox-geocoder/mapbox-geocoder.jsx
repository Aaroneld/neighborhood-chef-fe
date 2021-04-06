import React, { useState, useEffect } from 'react';
import { formPageOneStyles } from './../FormPageOne.styles';
import SearchIcon from '@material-ui/icons/Search';
import { ErrorMessage } from '@hookform/error-message';
import MapboxAddressSearch from './mapbox-address-search';

function MapboxGeocoder({ errors, setValues, values, validate }) {
  const styles = formPageOneStyles();
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [flagAddressValidation, flag] = useState(0);
  const [mostRecentlyChosenAddress, setMostRecentlyChosenAddress] = useState(
    values.address ? values.address : ''
  );

  useEffect(() => {
    if (data) {
      setValues((values) => {
        return { ...values, ...data };
      });
    }
  }, [data, setValues]);

  useEffect(() => {
    if (!values.address && flagAddressValidation === 1) {
      validate('address');
      validate('longitude');
      validate('latitude');
      flag(0);
    }
  }, [flagAddressValidation, validate, values.address]);

  const handleBlur = (e) => {
    e.persist();
    if (data) {
      setData(null);
      validate('address');
      validate('longitude');
      validate('latitude');
      setMostRecentlyChosenAddress(e.target.value);
    } else if (mostRecentlyChosenAddress !== e.target.value) {
      setValues((values) => {
        return { ...values, address: '', longitude: '', latitude: '' };
      });
      flag(1);
    }
    setOpen(false);
  };
  return (
    <div className={styles.inputContainer}>
      <div className="createFormInputDiv">
        <MapboxAddressSearch
          setData={setData}
          handleBlur={handleBlur}
          open={open}
          setOpen={setOpen}
          mostRecentlyChosenAddress={mostRecentlyChosenAddress}
        />
        <SearchIcon color="disabled" className={styles.icon} />
      </div>
      {errors.address && errors.address.length > 0 && (
        <ErrorMessage
          name="address"
          errors={errors}
          message={errors.address[0]}
          render={({ message }) => (
            <p className="error-message" style={{ color: 'crimson' }}>
              {message}
            </p>
          )}
        />
      )}
    </div>
  );
}

export default MapboxGeocoder;
