import { makeStyles } from '@material-ui/core/styles';
import { CenterFocusStrong } from '@material-ui/icons';

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
        fontSize: '110%'
      }
    },

    '& #title': {
      marginTop: '-1%',

      [theme.breakpoints.down('lg')]: {
        marginTop: '0'
      }
    },

    [theme.breakpoints.down('lg')]: {
      '& #description-header': {
        marginTop: '-3.5%'
      }
    },

    '& #description': {
      marginTop: '1%',
      fontSize: '120%',

      
      [theme.breakpoints.down('lg')] : {
        fontSize: '90%',
        
      },
    },

    '& .makeStyles-modifier-51': {

      justifyContent: 'flex-start',

      '& .makeStyles-root-52': {
        width: '16%',
        marginLeft: '-.5%',

        '& svg': {
          fontSize: '5.5rem'
        },

        '& p': {
          fontSize: '80%',
          whiteSpace: 'nowrap',
          color: 'black',
          opacity: 1
        },

        [theme.breakpoints.down('lg')]: {
          width: '15%',


          '& .makeStyles-modifierNotActive-53': {
            width: '55px',
            height: '55px'
          },

          '& svg': {
            fontSize: '3.5rem'
          },

          "& p": {
            fontSize: '50%'
          }
        }
      }
    },

    '& .makeStyles-container-60': {
      marginTop: '4%',
      marginLeft: '6%',

      "& button": {
        width: '12%',

        [theme.breakpoints.down('lg')]: {
          width: '17%'
        }
      }
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
      fontSize: '70%'
    }
  },
  h4: {
    fontSize: '150%',
    color: '#1A0F2C',
    margin: '0',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '2px solid #f3f3f3',
    boxShadow: '0px 4px 15px rgba(179, 179, 179, 0.1)',
    borderRadius: '25px',
    marginTop: '10px',
    padding: '30px',
    width: '90%',

    [theme.breakpoints.down('lg')] : {
      width: '100%',
      padding: "30px 3%",
    },
  },
  hashtagContainer: {
    '& #hashtags': {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: "2%",

      '& *': {
        fontSize: '90%'
      }, 
      
      '& .makeStyles-root-45': {
        marginRight: '1%',
        padding: '.5% 1%'
      },

   
    }
  },
  card: {
    display: 'flex',
    width: '100%',
    minHeight: '200px',
    marginBottom: '2%',

    [theme.breakpoints.down('lg')]: {
      marginBottom: '0'
    },

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  img: {
    height: 0,
    width: '30%',
    paddingTop: '16.875%',
    boxShadow: "5px 5px 12px 1px rgba(25,25,25,0.28)",
    backgroundImage: (props) => `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '25px',

    [theme.breakpoints.down('800')]: {
      maxWidth: '90%',
    },
  },
  dateDiv: {
    display: 'flex',
  },
  grayText: {
    fontSize: '1.6rem',
    color: 'rgba(0, 0, 0, 0.5)',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem'
    }
  },
  startTime: {
    fontSize: '1.6rem',
    color: '#82DF96',
    fontWeight: '500',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem'
    }
  },
  endTime: {
    fontSize: '1.6rem',
    color: '#ea6565',
    fontWeight: '500',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem'
    }
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: '30px',
    textAlign: 'left',
    width: '50%',

    '& >*' : {
      marginBottom: '2%'
    },

    [theme.breakpoints.down('800')]: {
      width: '82%',
      marginTop: '10px',
      height: '100px',
    },
    [theme.breakpoints.down('695')]: {
      width: '96%',
    },
  },
}));
