import { makeStyles } from '@material-ui/core/styles';

export const formPageTwoStyles = makeStyles(() => ({
  container: {
    width: '90%',

    '& #image-hashtag-container': {
      display: 'flex',
      marginTop: '40px',

      '& >*:first-child': {
        flexBasis: '50%',
        
        '& >div': {
          justifyContent: 'flex-start'
        }
     },

     '& >*:last-child': {
       flexBasis: '50%'
     },

     '& p': {
       fontFamily: '"Poppins", sans-serif'
     }
  },

    '& .upload-image-div': {
      height: 0,
      width: '90%',
      paddingTop: '50.625%',
      boxShadow: "5px 5px 12px 1px rgba(25,25,25,0.28)",

      '&:hover': {
        filter: "brightness(70%)"
      }
    },

    '& #upload-image-caption': {
      marginLeft: '-10%',
      marginTop: '2%',
      fontSize: '90%'
    },

    "& #modifier-container-first": {
      marginTop: '-1%'
    }
  },
  modifierContainer: {
    display: 'flex',
    width: '100%',
    flexFlow: 'row wrap',
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
