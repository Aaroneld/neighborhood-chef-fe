import makeStyles from '@material-ui/styles/makeStyles';

export const authHeaderStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '8vh',
    'box-shadow': '0px 13px 39px -1px #C9C9C9',

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
        },
      },

      '& svg': {
        color: '#58D573',
        marginLeft: '2%',
        marginTop: '-.5%',
        marginRight: '3%',
        minWidth: '7%',
        maxwidth: '7%',
        width: '7%',
        height: '15%',
      },
    },

    '& .authheader-links': {
      flexBasis: '60%',
      display: 'flex',
      marginTop: '.09%',

      '& *': {
        marginTop: '.5%',
        fontSize: '120%',
      },

      '& >:first-child': {
        marginRight: '15%',
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
    },
  },
});
