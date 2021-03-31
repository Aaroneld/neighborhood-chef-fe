import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  container: {
    height: '92vh',
    maxHeight: '92vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',

    '& .register-card': {
      position: 'relative',
      zIndex: '1',
      width: '25%',
      height: '72vh',
      top: '46vh',
      transform: 'translateY(-51%)',
      left: '10%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',

      '& >*': {
        padding: '0 2%',
      },

      '& .card-header': {
        '& >:first-child': {
          fontFamily: "'Poppins', sans-serif",
          marginTop: '2%',
          marginBottom: '4%',
        },
        [theme.breakpoints.down('lg')]: {
          '& h1': {
            fontSize: '3rem',
          },
          '& >:first-child': {
            marginBottom: '2%',
          },
        },
      },

      '& form': {
        marginTop: '5%',
        [theme.breakpoints.down('lg')]: {
          marginTop: '0',
        },
      },

      '& .MuiCardActions-root': {
        alignSelf: 'center',
        position: 'absolute',
        bottom: '2%',

        '& .MuiMobileStepper-dotActive': {
          background: '#58D573',
        },
      },
      [theme.breakpoints.down('lg')]: {
        width: '30%',
        height: '78vh',
      },
      [theme.breakpoints.down('md')]: {
        width: '44%',
        left: '3%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        left: '5%',
      },
    },
    '& .register-map, .overlays': {
      overflow: 'hidden',
      position: 'relative',
      left: '50%',
      transform: 'translate(-50%, -80%)',
      zIndes: '0',
      [theme.breakpoints.down('lg')]: {
        transform: 'translate(-50%, -83.5%)',
      },
    },
    [theme.breakpoints.down('lg')]: {
      height: '90vh',
    },
  },
  overlay: {
    position: 'absolute',
    zIndex: '9',
    top: 0,
    width: '100vw',
    height: '100vh',
    minHeight: '100vh',
    background: 'black',
    opacity: '.7',
  },
}));
