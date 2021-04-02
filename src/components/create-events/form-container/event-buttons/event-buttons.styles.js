import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: '10%',

    '& button': {
      width: '45%',
      margin: '0',
    },

    '& >*:last-child': {
      border: 'none',
      outline: 'none',
    },
  },
}));
