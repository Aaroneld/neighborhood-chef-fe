import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',

    '& *': {
      fontSize: '97%',
    },

    '& >*': {
      marginLeft: '2%',
    },
    '& .name-fields': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '4%',

      '& div': {
        width: '98%',
      },
    },

    '& .gender-field': {
      marginTop: '3%',
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

      '& button': {
        fontWeight: 'lighter',
        fontFamily: '"Roboto", "Helvetica", "Poppins", sans-serif',
      },
    },
  },
});
