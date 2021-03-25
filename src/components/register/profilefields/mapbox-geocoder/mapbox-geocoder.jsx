import React, { useState, useEffect } from 'react';
import { formPageOneStyles } from './../../../create-events/form-container/form-page-one/FormPageOne.styles';
import SearchIcon from '@material-ui/icons/Search';
import { ErrorMessage } from '@hookform/error-message';
import MapboxAddressSearch from './mapbox-address-search';
import { styles } from './mapbox-geocoder.styles';

import Typography from '@material-ui/core/Typography';

function MapboxGeocoder({ errors, setValues, values, validate }) {
  const classnames = styles();
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
  }, [data]);

  useEffect(() => {
    if (!values.address && flagAddressValidation === 1) {
      validate('address');
      validate('longitude');
      validate('latitude');
      flag(0);
    }
  }, [flagAddressValidation]);

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
    <div className={classnames.container}>
      <MapboxAddressSearch
        setData={setData}
        handleBlur={handleBlur}
        open={open}
        setOpen={setOpen}
        mostRecentlyChosenAddress={mostRecentlyChosenAddress}
      />

      {errors.address && errors.address.length > 0 && (
        <ErrorMessage
          name="address"
          errors={errors}
          message={errors.address[0]}
          render={({ message }) => <p style={{ color: 'crimson' }}>{message}</p>}
        />
      )}
    </div>
  );
}

export default MapboxGeocoder;
