import { makeStyles } from '@material-ui/core/styles';

export const formPageTwoStyles = makeStyles((theme) => ({
  container: {
    width: '90%',

    '& #image-hashtag-container': {
      display: 'flex',
      marginTop: '40px',

      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
  
      },

      '& >*:first-child': {
        flexBasis: '40%',

        [theme.breakpoints.down('md')]: {
          marginBottom : '4%',

          '& p': {
            marginLeft: '2%'
          }
        },
        
        '& >div': {
          justifyContent: 'flex-start',

          [theme.breakpoints.down('md')]: {
            justifyContent: 'center', 
          }
        }
     },

     '& >*:last-child': {
       flexBasis: '60%',
       
       '& >p': {
        marginTop: '-.75%',

        [theme.breakpoints.down('sm')]: {
          textAlign: 'center', 
        }
      },

      [theme.breakpoints.down('sm')]: {
        marginBottom: '4%'
      }
     },

     '& p': {
       fontFamily: '"Poppins", sans-serif'
     },
     
    

  },

    '& #upload-image-div': {
      height: 0,
      width: '90%',
      paddingTop: '50.625%',
      borderRadius: 0,
      border: 'none',
      marginTop: 0,
      boxShadow: "5px 5px 12px 1px rgba(25,25,25,0.28)",
      borderRadius: '25px',

      '&:hover': {
        filter: "brightness(70%)"
      }
    },

    '& #upload-image-caption': {
      marginLeft: '-10%',
      marginTop: '-.5%',
      fontSize: '90%'
    },

    "& #modifier-container-first": {
      marginTop: '-1%'
    },

    '& #modifier-container-second': {
      marginBottom: '1.5%'
    },

    [theme.breakpoints.down('sm')]: {
      "& #modifier-container-second, #modifier-container-first": {
        textAlign: 'center',
        marginBottom: '4%',

        '& p': {
          marginBottom: '8%',
          fontSize: '135%'
        }
      }
    }
  },
  modifierContainer: {
    display: 'flex',
    width: '100%',
    flexFlow: 'row wrap',

    [theme.breakpoints.down('sm')]: {
      
      justifyContent: 'center',

      "& >*": {
        flexBasis: '27%',
      }
    }
  },
  modifierLabel: {
    margin: '2% 0',
    fontSize: '120%',
    fontFamily: '"Poppins", sans-serif'
  },
  typography: {
    marginTop: '25px',
    fontWeight: 'bold',
  },
  pointer: {
    cursor: 'pointer',
  },
}));
