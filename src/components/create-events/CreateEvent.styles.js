// @ts-nocheck
import { makeStyles } from '@material-ui/core/styles';

export const cardStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
    height: '82vh',
    width: '80vw',
    background: 'transparent',
    overflowY: 'hidden',
    paddingRight: '6px',

    '&:hover': {
      overflowY: 'scroll',
      paddingRight: '0',
    },

    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },

    [theme.breakpoints.down('sm')]: {
      height: '75vh',
    },
  },
}));

export const headerStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    marginTop: '10px',
    marginBottom: '10px',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-around',
      width: '100vw',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
  },
  notActive: {
    display: 'flex',
    alignItems: 'center',
    color: '#d9d9d9',
  },
  active: {
    display: 'flex',
    alignItems: 'center',
    color: '#0c0c41',
  },
  icon: {
    fontSize: '5rem',
    marginRight: '5px',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  h3: {
    fontSize: '140%',
    fontWeight: '200',
    paddingLeft: '8%',

    [theme.breakpoints.down('lg')]: {
      fontSize: '120%',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
}));

export const buttonStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '5%',
    marginBottom: '20px',
    width: '100%',
    [theme.breakpoints.down('800')]: {
      marginRight: '0',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  leftBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #e5e5e5',
    background: 'rgba(255, 255, 255, 0.5)',
    padding: '15px 20px',
    borderRadius: '15px',
    margin: '20px 20px',
    color: '#b3b3b3',
    outline: 'none',
    fontSize: '2rem',
    fontWeight: 'bold',
    width: '15%',
    [theme.breakpoints.down('800')]: {
      width: '30%',
    },
  },
  rightBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#58d473',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
    padding: '15px 20px',
    borderRadius: '15px',
    margin: '20px 0',
    color: 'white',
    outline: 'none',
    fontSize: '2rem',
    fontWeight: 'bold',
    width: '15%',
    [theme.breakpoints.down('800')]: {
      width: '30%',
    },
  },
}));

export const addModifierFormStyles = makeStyles(() => ({
  root: {},
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flexStart',
    margin: '2% 0 .5% 0',
  },
  input: {
    fontSize: '1.6rem',
    border: 'none',
    borderBottom: '2px solid #f0f0f0',
    width: '78%',
    outline: 'none',
    borderRadius: '10px',
    padding: '15px 15px',
  },
  button: {
    color: 'white',
    fontSize: '1.6rem',
    background: '#82df96',
    borderRadius: '10px',
    border: 'none',
    fontWeight: 'bold',
    wordSpacing: '15px',
    cursor: 'pointer',
    padding: '15px 20px',
    marginLeft: '2%',
  },
  inactive: {
    opacity: '0.75',
  },
  modifierContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
}));

export const hashtagAndWarningStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: '#ea6565',
    opacity: '0.75',
    borderRadius: '10px',
    marginTop: '10px',
    marginRight: '1%',
    color: 'white',
    fontSize: '110%',
    width: 'auto',
    maxWidth: '400px',
    whiteSpace: 'pre-line',
    padding: '.5% 1%',
    cursor: 'pointer',
  },
  p: {
    wordWrap: 'break-word',
  },
  span: {
    cursor: 'pointer',
    fontWeight: 'bold',
    marginLeft: '10px',
  },
}));
