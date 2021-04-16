import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import VariableHeader from './header-partition-variable/headerPartitionVariable';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import logoutVariant from '@iconify-icons/mdi/logout-variant';
import { Icon } from '@iconify/react';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',

    'header-persistent': {
      minWidth: '100vw',
    },
    'header-variable': {},

    '& .rightSide': {
      width: '15%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginRight: '1%',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
      '& svg': {
        marginRight: '5%',
        fontSize: '4.5rem',
        color: 'black',
        opacity: 0.5,
      },

      '& .avatar': {
        alignSelf: 'center',
        marginRight: '1%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

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
    },
  },
}));

function Header(props) {
  const classes = styles();
  const user = useSelector((state) => state.user);
  const { push } = useHistory();

  return (
    <div className={classes['container']}>
      <VariableHeader className={classes['header-variable']} />
      <div className="rightSide">
        <Icon icon={logoutVariant} />
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

export default Header;
