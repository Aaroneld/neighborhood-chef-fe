import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import chefIcon from '@iconify/icons-whh/chef';

import { makeStyles } from '@material-ui/core/styles';

export const logoStyles = makeStyles((theme) => ({
  leftSideHeader: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '200%',
    fontWeight: '500',
    marginLeft: '5%',

    '& #logo-icon': {
      color: '#58D473',
      width: '10%',
      marginRight: '1%',

      [theme.breakpoints.down('lg')]: {
        marginRight: '3%',
      },

      [theme.breakpoints.down('md')]: {
        width: '5%',
        marginRight: '0%',
      },

      [theme.breakpoints.down('sm')]: {
        width: '10%',
      },
    },

    [theme.breakpoints.down('lg')]: {
      fontSize: '150%',
    },

    [theme.breakpoints.down('md')]: {
      marginTop: '2%',
      fontSize: '200%',
      marginLeft: 0,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '150%',
    },
  },
}));

function Logo() {
  const styles = logoStyles();

  return (
    <Link to="/dashboard">
      <div className={styles.leftSideHeader}>
        <span id="logo-icon">
          <Icon style={{ width: '80%' }} icon={chefIcon} />
        </span>
        <span>Neighborhood Chef</span>
      </div>
    </Link>
  );
}

export default Logo;
