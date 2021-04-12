import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { styles } from './settings.styles';

const Settings = () => {
  const user = useSelector((state) => state.user);
  const classes = styles();
  return (
    <Card className={classes.root}>
      <div className="main">
        <div className="textIconContainer">
          <Typography variant="h6">First Name</Typography>
          <Typography>{user.firstName}</Typography>
        </div>
        <div className="textIconContainer">
          <Typography variant="h6">Last Name</Typography>
          <Typography>{user.lastName}</Typography>
        </div>
        <div className="textIconContainer">
          <Typography variant="h6">Address</Typography>
          <Typography>{user.address}</Typography>
        </div>
        <div className="textIconContainer">
          <Typography variant="h6">Gender</Typography>
          <Typography>{user.gender}</Typography>
        </div>
        {user.biography && (
          <div className="textIconContainer">
            <Typography variant="h6">Biography</Typography>
            <Typography>{user.biography}</Typography>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Settings;
