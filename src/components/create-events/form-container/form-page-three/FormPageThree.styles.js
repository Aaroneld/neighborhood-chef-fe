import { makeStyles } from '@material-ui/core/styles';

export const formPageThreeStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& h4': {
      fontSize: '140%',
      fontWeight: 'bold',

      [theme.breakpoints.down('lg')]: {
        fontSize: '110%',
      },
    },

    '& #title': {
      marginTop: '-1%',

      [theme.breakpoints.down('lg')]: {
        marginTop: '0',
      },

      [theme.breakpoints.down('md')]: {
        marginTop: '-4.5%',
      },

      [theme.breakpoints.down('sm')]: {
        fontSize: '140%',
        marginLeft: '5%',
      },
    },

    '& #description': {
      marginTop: '1%',
      fontSize: '120%',

      [theme.breakpoints.down('lg')]: {
        fontSize: '90%',
      },

      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },

    '& #form-buttons': {
      marginTop: '3.5%',
      marginLeft: '2%',

      '& button': {
        width: '17.5%',

        [theme.breakpoints.down('md')]: {
          width: '25%',
        },

        [theme.breakpoints.down('sm')]: {
          width: '35%',
        },
      },
    },
  },
  h3: {
    textAlign: 'left',
    width: '100%',
    fontSize: '90%',
    fontStyle: 'italic',
    fontWeight: '500',
    color: '#1a0f2c',
    margin: '5px 0',

    [theme.breakpoints.down('lg')]: {
      fontSize: '70%',
    },
  },
  h4: {
    fontSize: '150%',
    color: '#1A0F2C',
    margin: '0',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    border: '2px solid #f3f3f3',
    boxShadow: '0px 4px 15px rgba(179, 179, 179, 0.1)',
    borderRadius: '25px',
    marginTop: '10px',
    padding: '4%',
    width: '90%',

    [theme.breakpoints.down('lg')]: {
      width: '100%',
      padding: '4% 3%',
    },
  },
  hashtagContainer: {
    '& #hashtags': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: '1.5%',

      '& *': {
        fontSize: '80%',
      },

      '& .hashtags': {
        marginRight: '1%',
        padding: '.5% 1%',
      },
    },
  },
  descriptionContainer: {
    width: '100%',
    marginTop: '3%',
    [theme.breakpoints.down('450')]: {
      marginTop: '10%',
    },
    '& #description': {
      marginTop: '1%',
      fontSize: '120%',

      [theme.breakpoints.down('lg')]: {
        fontSize: '90%',
      },

      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
  },
  card: {
    display: 'flex',
    width: '100%',
    marginBottom: '.5%',

    [theme.breakpoints.down('lg')]: {
      marginBottom: '0',
    },

    [theme.breakpoints.down('md')]: {
      marginBottom: '-5%',
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '8%',
    },
  },
  img: {
    height: 0,
    width: '30%',
    paddingTop: '16.875%',
    boxShadow: '5px 5px 12px 1px rgba(25,25,25,0.28)',
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '25px',

    [theme.breakpoints.down('md')]: {
      width: '100%',
      paddingTop: '36%',
      marginBottom: '4%',
    },

    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginTop: '4%',
      paddingTop: '50.625%',
    },
  },
  dateDiv: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      alignSelf: 'center',
    },
  },
  grayText: {
    fontSize: '1.6rem',
    color: 'rgba(0, 0, 0, 0.5)',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
    },
  },
  startTime: {
    fontSize: '1.6rem',
    color: '#82DF96',
    fontWeight: '500',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
    },
  },
  endTime: {
    fontSize: '1.6rem',
    color: '#ea6565',
    fontWeight: '500',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
    },
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '30px',
    textAlign: 'left',
    width: '70%',

    '& >*': {
      marginBottom: '1%',
    },

    '& >*:nth-child(-n+3)': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },

    [theme.breakpoints.down('800')]: {
      width: '82%',
      marginTop: '10px',
      height: '100px',
    },
    [theme.breakpoints.down('695')]: {
      width: '96%',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-5%',
      alignSelf: 'center',
      marginTop: '30px',
    },
  },
}));
