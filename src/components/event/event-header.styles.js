import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: '15%',
    left: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    transform: 'translateX(-30%)',

    '& h2': {
      fontSize: '250%',
      fontWeight: 500,
      whiteSpace: 'nowrap',

      [theme.breakpoints.down('lg')]: {
        fontSize: '200%',
      },

      [theme.breakpoints.down('md')]: {
        fontSize: '150%',
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '110%',
      },
    },

    '& p': {
      [theme.breakpoints.down('lg')]: {
        fontSize: '100%',
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '80%',
      },
    },

    '& span': {
      opacity: 0.7,
    },

    '& a': {
      textDecoration: 'underline',

      [theme.breakpoints.down('lg')]: {
        fontSize: '70%',
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '80%',
      },
    },

    [theme.breakpoints.down('md')]: {
      top: '17%',
      transform: 'translateX(-60%)',
    },

    [theme.breakpoints.down('sm')]: {
      top: '10%',
    },
  },
  attendingContainer: {
    position: 'absolute',
    left: '6%',
    top: '34%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    background: '#F8F8F8',
    paddingBottom: '.75%',
    padding: '1% 2% 2% 2%',
    border: '1px solid #F0F0F0',
    borderRadius: '10px',

    '& h6': {
      color: 'black',
    },

    '& .MuiAvatarGroup-root': {
      '&:hover': {
        filter: 'brightness(35%)',
      },
    },

    '& .MuiAvatar-root': {
      height: '50px',
      width: '50px',
    },
  },
}));
