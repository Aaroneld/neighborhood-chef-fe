import React from 'react';
import chefIcon from '@iconify/icons-whh/chef';
import { Icon } from '@iconify/react';

import { useHistory, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { buttonStyles } from '../../styles';
import { authHeaderStyles } from './authheader.styles';
import HamburgerMenu from './HamburgerMenu';

import ls from 'local-storage';
import { nanoid } from 'nanoid';

const qs = require('querystring');
const crypto = require('crypto-browserify');

const AuthHeader = () => {
  const styles = authHeaderStyles();
  const location = useLocation();
  const url = location.pathname.split('/')[1];
  const buttonClass = buttonStyles();
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
      <div className="authheader-logo">
        <div>
          <Icon width="1.1em" icon={chefIcon} />
          <p>Neighborhood Chef</p>
        </div>
      </div>
      <div className="authheader-links">
        <button
          className={`${buttonClass.root} ${url !== 'community' && buttonClass.notActive}`}
          onClick={() => push('/community')}
        >
          <Typography>Community</Typography>
        </button>

        <button
          className={`${buttonClass.root} ${url !== 'about' && buttonClass.notActive}`}
          onClick={() => push('/about')}
        >
          <Typography>About&nbsp;Us</Typography>
        </button>
      </div>
      <div className="login-register">
        <button className={`${buttonClass.root} ${buttonClass.single}`} onClick={handleClick}>
          <Typography>Login</Typography>
        </button>

        <button className={`${buttonClass.root} ${buttonClass.single}`} onClick={() => push('/register')}>
          <Typography>Register</Typography>
        </button>
      </div>
      <HamburgerMenu />
    </div>
  );
};

export default AuthHeader;
