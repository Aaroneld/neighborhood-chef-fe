import React from 'react';
import { buttonStyles, cardStyles } from '../../styles';

import AuthHeader from '../shared/AuthHeader';
import food from '../../assets/food.jpg';
import bgImage from '../../assets/chef.svg';
import { landingPageStyles } from './login.styles';

const Login = () => {
  const styles = landingPageStyles({ bgImage });

  return (
    <div className={styles.container}>
      <AuthHeader />
      <div className={styles.landingPageContainer}>
        <div className={styles.landingPageLeft} id="login-card">
          <div></div>
        </div>
        <div className={styles.landingPageRight}>
          <img src={food} alt="food community" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default Login;
