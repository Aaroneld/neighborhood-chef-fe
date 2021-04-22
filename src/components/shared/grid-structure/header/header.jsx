import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import VariableHeader from './header-partition-variable/headerPartitionVariable';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import logoutIcon from '@iconify-icons/mdi/logout';
import { Icon } from '@iconify/react';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 'inherit',
    'header-persistent': {},
    'header-variable': {},

    '& .rightSide': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: '-1.2%',
      marginRight: '3.5%',
      flexBasis: '15%',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
      '& svg': {
        fontSize: '4.5rem',
        color: 'black',
        opacity: 0.2,
      },

      '& .avatar': {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',

        '& >div': {
          border: '2px solid rgba(88, 212, 115, 0.3)',
          height: '45px',
          width: '45px',
          marginLeft: '10%',

          [theme.breakpoints.down('lg')]: {
            height: '50px',
            width: '50px',
          },
        },
      },
    },
  },
}));

function Header({ setEmpty }) {
  const classes = styles();
  const user = useSelector((state) => state.user);
  const { push } = useHistory();

  return (
    <div className={classes['container']}>
      <VariableHeader className={classes['header-variable']} setEmpty={setEmpty} />
      <div className="rightSide">
        {Object.keys(user).length > 0 && (
          <div className="avatar">
            <Icon icon={logoutIcon} />
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

export default Header;
