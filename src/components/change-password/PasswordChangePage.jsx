import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { cardStyles } from '../../styles';
import { buttonStyles } from '../../styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import food from '../../assets/food.jpg';
import { landingPageStyles } from '../../styles';

function ChangePassword() {
  const [passwordData, setPasswordData] = useState({});
  const [error, setError] = useState('');
  const { push } = useHistory();
  const { string } = useParams();
  const classes = buttonStyles();
  const cardClass = cardStyles();
  const styles = landingPageStyles();
  const id = string.split('-')[0];
  const hash = string.split('-')[1];

  const handleChange = (e) => {
    e.preventDefault();
    setError('');
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordData.password === passwordData.confirmPassword) {
      try {
        const body = {
          hash,
          id,
          password: passwordData.password,
        };

        await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/initialChangePassword`, body);
        push('/');
      } catch (err) {
        setError(
          'Password does not meet requirements. Please ensure you have a capital letter and a special character.'
        );
        console.dir(err);
      }
    } else setError('Passwords do not match.');
  };

  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.landingPageLeft}>
        <Card className={`${cardClass.root} ${cardClass.landingPage}`} style={{ overflowY: 'auto' }}>
          <CardContent style={{ marginTop: '2%', width: '100%' }}>
            <Typography variant="h4" style={{ marginTop: '20px', textAlign: 'center' }}>
              Create a Secure Password
            </Typography>
            <form
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '50px',
                width: '100%',
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                style={{ width: '90%', marginBottom: '30px' }}
                type="password"
                name="password"
                placeholder=" Enter your new password"
                onChange={handleChange}
              />
              <TextField
                style={{ width: '90%', marginBottom: '30px' }}
                type="password"
                name="confirmPassword"
                placeholder=" Confirm New Password"
                onChange={handleChange}
              />
              <Button
                className={`${classes.root} ${classes.single}`}
                style={{ fontSize: '1.6rem' }}
                type="submit"
              >
                Change Password
              </Button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          </CardContent>
        </Card>
      </div>
      <div className={styles.landingPageRight} style={{ overflow: 'hidden' }}>
        <img src={food} alt="food community" height="100%" />
      </div>
    </div>
  );
}

export default ChangePassword;
