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
      height: '86vh',
      top: '46vh',
      transform: 'translateY(-51%)',
      left: '10%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      boxShadow: '5px 5px 21px 3px rgba(71,71,71,0.23)',
      overflowY: 'scroll',

      '& >*': {
        padding: '0 2%',
      },

      '& .card-header': {
        marginLeft: '1%',

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
        margin: '3% 0',

        '& .MuiMobileStepper-dotActive': {
          background: '#58D573',
        },
      },

      [theme.breakpoints.down('lg')]: {
        width: '30%',
      },
      [theme.breakpoints.down('md')]: {
        width: '45%',
        left: '5%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
    },
    '& .register-map, .overlays': {
      overflow: 'hidden',
      position: 'relative',
      left: '50%',
      transform: 'translate(-50%, -79%)',
      height: '92vh',
      zIndex: '0',
      [theme.breakpoints.down('lg')]: {
        transform: 'translate(-50%, -90%)',
      },

      // [theme.breakpoints.down('md')]: {
      //   transform: 'translate(-50%, -57.3%)',
      // },

      // [theme.breakpoints.down('sm')]: {
      //   transform: 'translate(-50%, -200%)',
      // },

      [theme.breakpoints.down('699px')]: {
        display: 'block',
      },
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
