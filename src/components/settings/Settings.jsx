import React from 'react';
import { useSelector } from 'react-redux';

const Settings = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Settings;
