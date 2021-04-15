import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import chefIcon from '@iconify/icons-whh/chef';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

export const logoStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',

    '& .leftSideHeader': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontSize: '200%',
      fontWeight: '500',
      marginLeft: '2%',
      marginTop: '7%',
      width: '100%',

      '& #logo-icon': {
        color: '#58D473',
        marginTop: '2%',

        '& svg': {
          width: '400px',
        },

        [theme.breakpoints.down('md')]: {
          marginRight: '0%',
          marginTop: '1%',
        },
      },

      '& #text': {
        [theme.breakpoints.down('sm')]: {
          // display: 'none',
        },
      },

      [theme.breakpoints.down('lg')]: {
        fontSize: '150%',
      },

      [theme.breakpoints.down('md')]: {
        width: '50%',
        fontSize: '200%',
        marginLeft: 0,
        marginTop: '0',
        justifyContent: 'center',
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '150%',
        width: '70%',
        justifyContent: 'flex-start',
        marginLeft: '2%',
      },
    },
    '& .avatar': {
      alignSelf: 'center',
      marginTop: '1%',
      marginRight: '1%',
      marginLeft: '20%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      display: 'none',

      [theme.breakpoints.down('md')]: {
        display: 'block',
      },

      [theme.breakpoints.down('sm')]: {},

      '& >div': {
        border: '2px solid rgba(88, 212, 115, 0.3)',
        height: '60px',
        width: '60px',

        [theme.breakpoints.down('lg')]: {
          height: '50px',
          width: '50px',
        },
      },
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
}));

function Logo() {
  const styles = logoStyles();
  const user = useSelector((state) => state.user);
  const { push } = useHistory();

  return (
    <div className={styles.root}>
      {/* <Link to="/dashboard"> */}
      <div className="leftSideHeader">
        <span id="logo-icon">
          <Icon style={{ width: '80%' }} icon={chefIcon} />
        </span>
        <span id="text">Neighborhood Chef</span>
      </div>
      {/* </Link> */}
      {Object.keys(user).length > 0 && (
        <div className="avatar" onClick={() => push(`/profile/${user.id}`)}>
          <Avatar aria-label="avatar" src={!user.photo ? null : user.photo}>
            {!user.photo && (
              <Typography>{`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}</Typography>
            )}
          </Avatar>
        </div>
      )}
    </div>
  );
}

export default Logo;
