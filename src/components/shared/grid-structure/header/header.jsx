import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PersistentHeader from './header-partition-persistent/headerPartitionPersistent';
import VariableHeader from './header-partition-variable/headerPartitionVariable';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
  },
  'header-persistent': {
    minWidth: '100vw',
  },
  'header-variable': {},
  avatar: {
    alignSelf: 'center',
    marginRight: '1%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      right: '3.4%',
      top: '3.4%'
    },

    [theme.breakpoints.down('sm')]: {
      right: '3.8%',
      top: '3.2%'
    },

    '& >div': {
      border: '2px solid rgba(88, 212, 115, 0.3)', 
      height: '60px', 
      width: '60px',

      [theme.breakpoints.down('lg')]: {
        height: '50px', 
        width: '50px',
      }
    },
  }
}));

function Header(props) {
  const classes = styles();
  const user = useSelector((state) => state.user);
  const { push } = useHistory();

  return (
    <div className={classes['container']}>
      <VariableHeader className={classes['header-variable']} />
      <PersistentHeader
        openDrawer={props.openDrawer}
        open={props.open}
        className={classes['header-persistent']}
      />
      {Object.keys(user).length > 0 && (
        <div className={classes['avatar']} onClick={() => push(`/profile/${user.id}`)}>
          <Avatar
            aria-label="avatar"
            src={!user.photo ? null : user.photo}
          >
            {!user.photo && (
              <Typography>{`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}</Typography>
            )}
          </Avatar>
        </div>
      )}
    </div>
  );
}

export default Header;
