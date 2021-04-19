import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';
import { authHeaderStyles } from './authheader.styles';
import ls from 'local-storage';
import { nanoid } from 'nanoid';
const qs = require('querystring');
const crypto = require('crypto-browserify');

const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { push } = useHistory();
  const styles = authHeaderStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (url) => {
    setAnchorEl(null);
    push(url);
  };

  const handleLogin = (e) => {
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
    <div className={styles.hamburgerMenu}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon style={{ fontSize: '3.5rem' }} />
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleLogin}>Login</MenuItem>
        <MenuItem onClick={() => handleClose('/register')}>Register</MenuItem>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
