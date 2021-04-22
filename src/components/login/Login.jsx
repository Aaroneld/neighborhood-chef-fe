import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthHeader from '../shared/AuthHeader';
import bgImage from '../../assets/chef.svg';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { landingPageStyles } from './login.styles';
import ls from 'local-storage';
import { nanoid } from 'nanoid';

const qs = require('querystring');
const crypto = require('crypto-browserify');

const Login = () => {
  const styles = landingPageStyles({ bgImage });
  const { push } = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    ls.set('code_verifier', nanoid(43));

    const hash = crypto
      .createHash('sha256')
      .update(ls.get('code_verifier'))
      .digest('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
    const query = {
      client_id: process.env.REACT_APP_CLIENT_ID,
      response_type: 'code',
      scope: 'openid',
      redirect_uri: `${process.env.REACT_APP_FRONT_END_BASE_URL}/login-redirect-url`,
      state: 'state-bsaWCD8F0dkd85REyU87',
      code_challenge_method: 'S256',
      code_challenge: hash,
    };

    const redirectURL = `https://dev-36383529.okta.com/oauth2/default/v1/authorize?${qs.stringify(query)}`;
    window.location.replace(`${redirectURL}`);
  };

  return (
    <div className={styles.container}>
      <AuthHeader />
      <div className={styles.landingPageContainer}>
        <Card className="card">
          <Typography variant="h4">Let's start dining with the <span id="community">community!</span></Typography>
          <Typography variant="h6">
            Welcome to Neighborhood Chef, a powerful new tool to help you engage with your community, make
            friends, plan culinary related events, and most importantly, eat good food.
          </Typography>
          <Typography variant="h6" id="second-paragraph">
            It is our mission to help people engage with others in a safe and inclusive manner. Community is an 
            important aspect of social life and food has long been the medium through which this is shared. It is our hope that this service 
            is a small contributions to help <b>YOU</b> build your own. 
          </Typography>
          <Typography id="bonAppetit" variant="h6">
            ...Bon appétit!
          </Typography>
          <div className="buttons">
            <Button id="register" onClick={() => push('/register')}>
              Register
            </Button>
            <Typography variant="h6">Already have an account?</Typography>
            <Button id="login" onClick={handleClick}>
              Login
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
