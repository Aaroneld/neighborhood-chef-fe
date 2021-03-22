import React from 'react';
import { buttonStyles } from '../../styles';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { cardStyles } from '../../styles';
import AuthHeader from '../shared/AuthHeader';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import food from '../../assets/food.jpg';
import { landingPageStyles } from '../../styles';

const CheckEmail = () => {
  const classes = buttonStyles();
  const history = useHistory();
  const cardClass = cardStyles();
  const styles = landingPageStyles();

  return (
    <div>
      <AuthHeader />
      <div className={styles.landingPageContainer}>
        <div className={styles.landingPageLeft}>
          <Card className={`${cardClass.root} ${cardClass.landingPage}`} style={{ overflowY: 'auto' }}>
            <CardContent style={{ marginTop: '2%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography style={{ marginTop: '20px', textAlign: 'center' }}>
                  Register form success! For security, please check your email to finish registering your
                  account with us.
                </Typography>
                <Button
                  className={`${classes.root} ${classes.single}`}
                  onClick={() => history.push('/')}
                  style={{ marginTop: '15px' }}
                >
                  <Typography variant="h5">Return to login page</Typography>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={styles.landingPageRight} style={{ overflow: 'hidden' }}>
          <img src={food} alt="food community" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
