import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',

    '& *': {
      fontSize: '97%',
    },

    '& >*': {
      marginLeft: '2%',
    },

    '& .input-with-error-message': {
      position: 'relative',
    },

    '& .name-fields': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '4%',

      '& div': {
        width: '98%',
      },
      [theme.breakpoints.down('lg')]: {
        marginBottom: '2%',
      },
    },

    '& .gender-field': {
      marginBottom: '2%',

      '& .MuiInputBase-root': {
        width: '98%',
      },
    },

    '& hr': {
      margin: '3% 0',
    },

    '& .buttons': {
      display: 'flex',
      justifyContent: 'space-between',

      '& *': {
        fontSize: '115%',
      },

      '& p': {
        bottom: '-30%',
        fontSize: '80%',
        marginLeft: '3%',
      },

      '& button': {
        fontWeight: 'lighter',
        fontFamily: '"Roboto", "Helvetica", "Poppins", sans-serif',
        [theme.breakpoints.down('sm')]: {
          fontSize: '90%',
        },
      },
    },
    '& .error-message': {
      fontSize: '90%',
      textAlign: 'center',
      margin: '2% 0',
    },
  },
}));
