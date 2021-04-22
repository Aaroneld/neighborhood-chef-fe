import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import chefIcon from '@iconify/icons-whh/chef';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import logoutIcon from '@iconify-icons/mdi/logout';
import arrowLeftSquare from '@iconify-icons/bi/arrow-left-square';

export const logoStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'space-between',
    width: '100%',
    marginLeft: '2%',

    [theme.breakpoints.down('xs')]: {},

    '& .leftSideHeader': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontSize: '200%',
      fontWeight: '500',
      marginTop: '-5%',
      marginLeft: '6%',
      width: '100%',
      cursor: 'pointer',
      whiteSpace: 'nowrap',

      '& #navigation-arrow': {
        display: 'none',

        [theme.breakpoints.down('sm')]: {
          display: 'inherit',
          flexBasis: '90%',
          opacity: 0.5,

          '& >svg': {
            width: '37px',
            height: '37px',
          },
        },
      },

      '& #logo-icon': {
        color: '#58D473',
        fontSize: '3rem',
        marginTop: '2%',

        [theme.breakpoints.down('lg')]: {
          fontSize: '2.6rem',
        },

        [theme.breakpoints.down('md')]: {
          fontSize: '3.6rem',
          marginRight: '0%',
          marginTop: '1%',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '4.5rem',
          transform: 'translateX(50%)',
          marginTop: '4%',
        },
      },

      '& #text': {
        paddingLeft: '3%',

        [theme.breakpoints.down('lg')]: {
          fontSize: '2.5rem',
        },

        [theme.breakpoints.down('md')]: {
          fontSize: '3.6rem',
        },

        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },

      [theme.breakpoints.down('lg')]: {
        fontSize: '150%',
        marginLeft: '4%',
      },

      [theme.breakpoints.down('md')]: {
        width: '50%',
        fontSize: '200%',
        marginLeft: 0,
        marginRight: '5.5%',
        marginTop: '1%',
        justifyContent: 'center',
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '150%',
        flexBasis: '50%',
        justifyContent: 'flex-end',
        marginLeft: '2%',
        marginRight: 0,
      },
    },

    '& .iconsRight': {
      marginRight: '1%',
      alignSelf: 'center',
      marginTop: '1%',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexBasis: '20%',
      display: 'none',

      '& svg': {
        marginRight: '10%',
        height: '43px',
        width: '43px',
        color: 'black',
        opacity: 0.15,

        [theme.breakpoints.down('sm')]: {
          marginRight: '4%',
        },
      },

      '& .avatar': {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        marginRight: '10%',

        '& >div': {
          border: '2px solid rgba(88, 212, 115, 0.3)',
          height: '60px',
          width: '60px',

          [theme.breakpoints.down('lg')]: {
            height: '50px',
            width: '50px',
          },
          [theme.breakpoints.down('sm')]: {
            height: '40px',
            width: '40px',
          },
        },
      },
      [theme.breakpoints.down('md')]: {
        display: 'flex',
      },
      [theme.breakpoints.down('sm')]: {
        width: '25%',
        flexBasis: '50%',
      },
    },

    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-end',
      marginTop: '1%',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
      marginTop: '3%',
    },
  },
}));

function Logo() {
  const styles = logoStyles();
  const user = useSelector((state) => state.user);
  const { push } = useHistory();

  return (
    <div className={styles.root}>
      <div className="leftSideHeader">
        <span id="navigation-arrow" onClick={() => push('/navigation')}>
          <Icon icon={arrowLeftSquare} />
        </span>
        <span id="logo-icon" onClick={() => push('/dashboard')}>
          <Icon icon={chefIcon} />
        </span>
        <span id="text" onClick={() => push('/dashboard')}>
          Neighborhood Chef
        </span>
      </div>
      <div className="iconsRight">
        <Icon icon={logoutIcon} />
        {Object.keys(user).length > 0 && (
          <div className="avatar">
            <Avatar
              aria-label="avatar"
              src={!user.photo ? null : user.photo}
              onClick={() => push(`/profile/${user.id}`)}
            >
              {!user.photo && (
                <Typography>{`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}</Typography>
              )}
            </Avatar>
          </div>
        )}
      </div>
    </div>
  );
}

export default Logo;
