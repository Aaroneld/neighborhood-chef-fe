import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    '& .input-with-error': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      
      '& >p': {
        position: 'absolute',
        bottom: '1%',
        fontSize: '80%',
        left: '10%'
      },

      '& .email': {
        margin: '7% 0',
        width: '80%',
      }
    },

    '& .terms': {
      width: '70%',
      marginLeft: '-14.8%',

      '& .MuiSvgIcon-root': {
        fontSize: '3.5rem',
      },
      [theme.breakpoints.down('lg')]: {
        width: '90%',
        fontSize: '1.4rem',
        marginLeft: '3.5%',
        '& .MuiSvgIcon-root': {
          fontSize: '2rem',
        },
      },
    },

    '& button': {
      fontSize: '130%',
      marginTop: '15%',
      width: '50%',
      padding: '4% 2%',
      alignSelf: 'center',
      fontWeight: 'lighter',
      fontFamily: '"Roboto", "Helvetica", "Poppins", sans-serif',
      [theme.breakpoints.down('lg')]: {
        width: '70%',
      },
    },
  },
}));
