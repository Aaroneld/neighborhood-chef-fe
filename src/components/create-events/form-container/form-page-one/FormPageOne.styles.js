import { makeStyles } from '@material-ui/core/styles';

export const formPageOneStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      width: '95%',
    },

    "& #title-input, #date-div" : {
      marginTop: 0
    },

    '& .error-message': {
      position: 'absolute',
      top: '130%',
      fontSize: '70%',
      marginTop: '-1.5%',

      [theme.breakpoints.down('md')]: {
        top: '100%',
        fontSize: '65%',
      },
    },

    '& .error-message-descriptions': {
      position: 'absolute',
      fontSize: '70%',
      marginTop: '.5%',
      top: '100%',

      [theme.breakpoints.down('lg')]: {
        top: '96%',
      },

      [theme.breakpoints.down('md')]: {
        fontSize: '65%',
      },
    },

    '& #first-form-button': {
      marginLeft: 0,
      marginRight: '4%'
    },

    '& #second-form-button': {
      marginRight: 0
    },

    '& .form-button': {
      width: '100%',

      [theme.breakpoints.down('lg')]: {
        marginTop: "2%"
      },
      
      [theme.breakpoints.down('md')]: {
        width: "27%",
        marginTop: "0%"
      },

      [theme.breakpoints.down('sm')]: {
        width: "35%"
      }
    }
  },
  leftContainer: {
    width: '40%',
    [theme.breakpoints.down('md')]: {
      marginLeft: '5%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '90%',
    },
  },
  inputContainer: {
    position: 'relative',
  },
  inputDiv: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
    border: '2px solid #f0f0f0',
    borderRadius: '15px',
    margin: '40px 0',
    padding: '10px 15px',
    background: "white",

    [theme.breakpoints.down("lg")] : {
      margin: "1%"
    },

    [theme.breakpoints.down('md')]: {
      margin: '20px 0',
    },
  },
  icon: {
    fontSize: '2.6rem',
  },
  searchIcon: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-15%',
    },
  },
  input: {
    position: 'relative',
    height: '35px',
    border: 'none',
    borderRadius: '15px',
    outline: 'none',
    fontSize: '1.6rem',
   
    width: '90%',
    '&::placeholder': {
      color: '#b7b7b7',
    },
  },
  geo: {
    width: '90%',
  },
  label: {
    color: '#b7b7b7',
    fontSize: '1.6rem',
    marginRight: '6px',
  },
  textArea: {
    border: '2px dashed #f0f0f0',
    borderRadius: '15px',
    outline: 'none',
    paddingTop: '10px',
    paddingBottom: '30%',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '1.6rem',
    width: '100%',
    whiteSpace: 'wrap',
    resize: 'none',
    fontFamily: '"Arial", sans-serif',
    overflow: 'hidden',

    '&::placeholder': {
      color: '#b7b7b7',
      textIndent: '.5%',
      fontFamily: '"Arial", sans-serif',
    },
    [theme.breakpoints.down('md')]: {
      margin: '20px 0',
    },
  },
  rightContainer: {
    width: '35%',
    marginLeft: '10%',
    paddingRight: '30px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '90%',
      paddingRight: '0',
      marginLeft: '5%',
    },
  },
  timeDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    margin: '40px 0',
    [theme.breakpoints.down('md')]: {
      margin: '20px 0',
    },
  },

  times: {
    border: '2px solid #f0f0f0',
    borderRadius: '15px',
  },
  date: {
    borderRadius: '15px',
    border: '2px dashed #f0f0f0',
    color: 'black',
    padding: '12px 30px',
    fontSize: '1.6rem',
  },
  selectGreen: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 5px',
    opacity: '0.75',
    borderRadius: '5px',
    color: 'white',
    padding: '5px 20px',
    border: 'none',
    borderBottom: 'none',
    fontSize: '1.4rem',
    background: '#58d573',
  },
  selectRed: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 5px',
    opacity: '0.75',
    borderRadius: '5px',
    color: 'white',
    padding: '5px 20px',
    border: 'none',
    borderBottom: 'none',
    fontSize: '1.4rem',
    background: '#ea6565',
  },
  categoryDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: '2px solid #f0f0f0',
    borderRadius: '15px',
    color: '#b7b7b7',
    margin: '40px 0',
    padding: '7px',
    [theme.breakpoints.down('md')]: {
      margin: '20px 0',
    },
  },
  category: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '15px',
    marginLeft: '5%',
    background: 'white',
    fontSize: '1.6rem',
    padding: '6px 30px',
    outline: 'none',
    color: 'black',
  },
}));
