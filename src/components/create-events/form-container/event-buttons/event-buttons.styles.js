import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      margin: '4% 0',
    },

    '& button': {
      width: '15.75%',
      margin: '0 .8%',

      '&:hover': {
        filter: 'brightness(90%)',
      },

      [theme.breakpoints.down('md')]: {
        width: '25%',
      },

      [theme.breakpoints.down('sm')]: {
        width: '33.33%',
      },
    },

    '& >*:last-child': {
      border: 'none',
      outline: 'none',
      marginRight: '6.8%',

      [theme.breakpoints.down('lg')]: {
        marginRight: '2.4%',
      },

      [theme.breakpoints.down('md')]: {
        marginRight: 0,
        marginLeft: '4%',
      },
    },
  },
}));
