import React, { useState, useEffect } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import MapboxAddressSearch from './mapbox-address-search';
import { styles } from './mapbox-geocoder.styles';
import { FlyToInterpolator } from 'react-map-gl';
import * as d3 from 'd3-ease';

function MapboxGeocoder({ errors, setValues, values, validate, setViewport }) {
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

      if (data.latitude) {
        setViewport((prev) => {
          return {
            ...prev,
            longitude: data.longitude,
            latitude: data.latitude,
            zoom: 16,
            transitionDuration: 4000,
            transitionInterpolator: new FlyToInterpolator(),
            transistionEasing: d3.easeCubic,
          };
        });
      }
    }
    // eslint-disable-next-line
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
    <div className={classnames.container + ' input-with-error-message'}>
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
