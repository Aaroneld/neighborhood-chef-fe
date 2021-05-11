import React from 'react';
import Card from '@material-ui/core/Card';
import { styles } from './settings.styles';
import UpdateForm from './update-form/UpdateForm';

const Settings = () => {
  const classes = styles();

  return (
    <Card className={classes.root}>
      <UpdateForm />
    </Card>
  );
};

export default Settings;
