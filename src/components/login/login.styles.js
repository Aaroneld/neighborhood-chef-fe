import makeStyles from '@material-ui/styles/makeStyles';

export const landingPageStyles = makeStyles((theme) => ({
  container: {
    background:
      'linear-gradient(0deg, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%)',
  },
  landingPageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '92vh',
    width: '100%',
    backgroundImage: (props) => `url(${props.bgImage})`,
    backgroundPosition: '-20% 50%',
    backgroundSize: '70%',
    backgroundRepeat: 'repeat',

    '& .card': {
      width: '50%',
      height: '50vh',
      boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      borderRadius: '10px',
      padding: '5%',
      transform: 'translateX(-30%)',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        height: '60vh',
        transform: 'translateX(0%)',
      },

      '& h4': {
        fontWeight: 'bold',
      },

      '& #bonAppetit': {
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },

      '& .buttons': {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2%',
        },

        '& h6': {
          marginBottom: '1%',
        },

        '& button': {
          fontSize: '1.6rem',
          marginBottom: '5%',
          width: '85%',
        },

        '& #register': {
          border: '2px solid #58D573',
          color: 'white',
          background: '#58D573',
          '&:hover': {
            background: 'white',
            color: '#58D573',
          },
        },

        '& #login': {
          border: '2px solid #58D573',
          color: '#58D573',
          background: 'white',

          '&:hover': {
            background: '#58D573',
            color: 'white',
          },
        },
      },
    },
  },
}));
