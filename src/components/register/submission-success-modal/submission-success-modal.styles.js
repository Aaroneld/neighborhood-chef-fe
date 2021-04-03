import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '40vw',
    height: '70vh',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    color: 'black',
    zIndex: 10000,
    borderLeft: '15px solid rgba(88,213,115,.5)',
    borderRight: '15px solid rgba(88,213,115,.5)',
    borderTop: '15px solid #58D573',
    borderBottom: '15px solid #58D573',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    '& h3': {
      marginTop: '5%',
    },

    '& h6': {
      textDecoration: 'underline',
    },

    '& h4': {
      marginBottom: '2%',
    },

    '& h1': {
      marginTop: '5%',
      marginBottom: '1.5%',
      opacity: 0.5,
      fontFamily: 'Poppins, sans-serif',
    },

    '& #redirect-time': {
      fontSize: '1000%',
    },

    '& button': {
      width: '20%',
      alignSelf: 'center',
      marginTop: '7%',
      height: '7%',
      fontSize: '130%',

      '&:hover': {
        border: '2px solid #58D573',
        background: 'white',
        color: '#58D573',
      },
    },
  },
});
