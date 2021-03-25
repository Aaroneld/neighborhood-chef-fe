import makeStyles from '@material-ui/styles/makeStyles';

export const landingPageStyles = makeStyles((theme) => ({
  container: {
    background:
      'linear-gradient(0deg, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%)',
  },
  landingPageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '92vh',
    backgroundImage: (props) => `url(${props.bgImage})`,

    backgroundPosition: '-20% 50%',
    backgroundSize: '70%',
    backgroundRepeat: 'repeat',
  },
  landingPageLeft: {
    width: '55vw',
    height: '92vh',
    textAlign: 'center',
    alignSelf: 'center',

    '& > div': {
      position: 'relative',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      height: '80%',
      background: 'rgba(255,255,255,.5)',

      '& > div': {
        height: '90%',
        display: 'flex',
        flexDirection: 'column ',
        justifyContent: 'space-around',
      },
    },

    [theme.breakpoints.down('700')]: {
      width: '100vw',
      paddingTop: '35px',
    },
  },
  landingPageRight: {
    height: '92vh',
    width: '45vw',
    '& img': {
      borderRadius: '0 0 0 30%',
      borderLeft: '6px solid rgba(88,213,115,.7)',
      borderBottom: '6px solid rgba(88,213,115,.95)',
      filter: 'brightness(87%)',
    },
    [theme.breakpoints.down('700')]: {
      display: 'none',
    },
  },
}));
