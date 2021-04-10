import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  container: {

    'marginBottom': '4%',

    '& .MuiTextField-root': {
      width: '98%',
    },

    '& label': {
      color: 'rgba(0,0,0,.6)',
    },

    [theme.breakpoints.down('lg')]: {
      'marginBottom': '2%',
    }
  },
}));
