import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';
import { authHeaderStyles } from './authheader.styles';

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

  return (
    <div className={styles.hamburgerMenu}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon style={{ fontSize: '4.8rem' }} />
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => handleClose('/register')}>Register</MenuItem>
        <MenuItem onClick={() => handleClose('/')}>Login</MenuItem>
        <MenuItem onClick={() => handleClose('/about')}>About</MenuItem>
        <MenuItem onClick={() => handleClose('/community')}>Community</MenuItem>
      </Menu>
    </div>
  );
};

export default HamburgerMenu;
