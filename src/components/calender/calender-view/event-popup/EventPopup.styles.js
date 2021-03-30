import { makeStyles } from '@material-ui/core/styles';

export const cardStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    marginLeft: '25%',
    fontSize: '1.2rem',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      marginLeft: '20%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginLeft: '10%',
    },
  },
}));
