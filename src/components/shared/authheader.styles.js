import makeStyles from '@material-ui/styles/makeStyles';

export const authHeaderStyles = makeStyles((theme) => ({
  container: {
    position: 'sticky',
    zIndex: '3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '8vh',
    'box-shadow': '0px 13px 39px -1px rgba(201,201,201,.5)',

    '& .authheader-logo': {
      flexBasis: '30%',
      height: 'inherit',
      display: 'flex',
      alignItems: 'center',

      '& div': {
        margin: '2%',
        marginTop: '2%',
        display: 'flex',

        '& p': {
          fontSize: '200%',
          fontFamily: "'Poppins', sans-serif",
          whiteSpace: 'nowrap',
          [theme.breakpoints.down('sm')]: {
            fontSize: '160%',
          },
          [theme.breakpoints.down('xs')]: {
            fontSize: '120%',
          },
        },
      },

      '& svg': {
        color: '#58D573',
        marginLeft: '2%',
        marginTop: '-.5%',
        marginRight: '3%',
        width: '47px',
        height: '47px',
        [theme.breakpoints.down('sm')]: {
          width: '40px',
          height: '40px',
          marginTop: '-1%',
        },
        [theme.breakpoints.down('xs')]: {
          width: '30px',
          height: '30px',
        },
      },
    },

    '& .login-register': {
      display: 'flex',
      marginRight: '3%',

      '& *': {
        fontSize: '120%',
        outline: 'none',
      },

      '& >:first-child': {
        marginRight: '10%',
        background: 'white',
        color: '#58D573',
        border: '2px solid #58D573',
      },

      '& >:first-child:hover': {
        color: 'white',
        background: '#58D573',
      },

      '& >:last-child': {
        border: '2px solid white',
      },

      '& >:last-child:hover': {
        color: '#58D573',
        background: 'white',
        border: '2px solid #58D573',
      },
      [theme.breakpoints.down('md')]: {
        marginTop: '.3%',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    // [theme.breakpoints.down('lg')]: {
    //   height: '10vh',
    // },

    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
    },
  },
  hamburgerMenu: {
    display: 'none',
    marginRight: '3%',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));
