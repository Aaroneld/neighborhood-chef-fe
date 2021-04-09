import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: '1%',

    '& button': {
      width: '12%',
      margin: '0 .5%',
    },

    '& >*:last-child': {
      border: 'none',
      outline: 'none',
      marginRight: '4%',

      '&:hover': {
        filter: 'brightness(90%)'
      }
    },
  },
}));
