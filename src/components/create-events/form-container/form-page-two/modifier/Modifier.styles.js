import { makeStyles } from '@material-ui/core/styles';

export const modifierStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px',
    cursor: 'pointer',
    width: '11%',

    
    [theme.breakpoints.down('lg')]: {
      width: '13%',
    },

    [theme.breakpoints.down('md')]: {
      width: '15%',
      fontSize: '77%',
      color: 'black'
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '60%'
    }
    
  },
  modifierNotActive: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#82df96',
    width: '50%',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    opacity: '0.5',

    [theme.breakpoints.down('lg')]: {
      width: '70px',
      height: '70px',
    }
  },
  modifierActive: {
    opacity: '1',
  },
  icon: {
    fontSize: '3rem',
    color: 'white',
  },
  p: {
    opacity: '0.3',
    paddingTop: '10px',

    [theme.breakpoints.down('lg')]: {
      fontSize: '80%'
    }
  },
}));
