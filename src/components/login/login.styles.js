import makeStyles from '@material-ui/styles/makeStyles';

export const landingPageStyles = makeStyles((theme) => ({
  container: {
    overflow: 'hidden',
    maxHeight: '100vh',
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
      width: '28%',
      height: '70vh',
      boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      borderRadius: '10px',
      padding: '3% 3.5% 3% 3.5%',
      transform: 'translate(-90%,-5%)',
      background: 'rgba(255,255,255, 1)',

      [theme.breakpoints.down('lg')]: {
        width: '42%',
        height: '80vh',
        transform: 'translate(-55%, -5%)',
        overflowY: 'scroll',
        msOverflowStyle: 'none' /* Hide scrollbar for IE and Edge */,
        scrollbarWidth: 'none' /* Hide scrollbar for Firefox */,
        '&::-webkit-scrollbar': {
          display: 'none' /* Hide scrollbar for Chrome, Safari and Opera */,
        },
      },

      [theme.breakpoints.down('md')]: {
        width: '90%',
        transform: 'translate(0%, 0%)',
        padding: '5%',
      },

      [theme.breakpoints.down('sm')]: {
        height: '90%',
        width: '85%',
      },

      [theme.breakpoints.down('xs')]: {
        height: '75vh',
      },

      '& >*': {
        flexBasis: '20%',
      },

      '& #community': {
        '-webkit-text-fill-color': '#58D573' /* Will override color (regardless of order) */,
        '-webkit-text-stroke-width': '.5px',
        '-webkit-text-stroke-color': 'black',
        fontSize: '130%',
        marginTop: '-10%',
      },

      '& >h4:first-child': {
        fontWeight: 'bold',
        flexBasis: '10%',
        fontSize: '240%',

        [theme.breakpoints.down('md')]: {
          fontSize: '200%',
        },

        [theme.breakpoints.down('sm')]: {
          fontSize: '170%',
          flexBasis: '5%',
        },

        [theme.breakpoints.down('xs')]: {
          fontSize: '125%',
        },
      },

      '& h6': {
        fontSize: '135%',
        opacity: 0.9,
        marginTop: '4%',
        fontWeight: '400',

        [theme.breakpoints.down('lg')]: {
          fontSize: '120%',
        },

        [theme.breakpoints.down('md')]: {
          fontSize: '170%',
        },

        [theme.breakpoints.down('sm')]: {
          fontSize: '150%',
          marginTop: '2.5%',
        },

        [theme.breakpoints.down('xs')]: {
          fontSize: '110%',
        },
      },

      '& #second-paragraph': {
        [theme.breakpoints.down('xs')]: {
          display: 'none',
        },
      },

      '& #bonAppetit': {
        fontSize: '170%',
        marginTop: '8%',
        color: 'black',
        fontWeight: 'bold',
        opacity: 1,

        [theme.breakpoints.down('lg')]: {
          marginTop: '4%',
        },

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
          marginTop: '10%',
        },

        [theme.breakpoints.down('xs')]: {
          marginTop: '6%',
        },

        '& h6': {
          marginBottom: '1%',
          marginTop: '2%',
          fontSize: '110%',
        },

        '& button': {
          marginBottom: '5%',
          width: '85%',
          padding: '2%',
          fontSize: '130%',
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
          opacity: 0.7,
          marginTop: '1.5%',

          '&:hover': {
            background: '#58D573',
            color: 'white',
          },
        },
      },
    },
  },
}));
