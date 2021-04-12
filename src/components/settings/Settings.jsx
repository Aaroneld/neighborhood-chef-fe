import React from 'react';
import { useSelector } from 'react-redux';

const Settings = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <p>user settings</p>
    </div>
  );
};

export default Settings;
