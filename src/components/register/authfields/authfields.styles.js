import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '& .email': {
      margin: '10% 0',
      width: '70%',
    },

    '& .terms': {
      width: '70%',
      marginLeft: '-3.8%',

      '& .MuiSvgIcon-root': {
        fontSize: '3.5rem',
      },
    },

    '& button': {
      marginTop: '15%',
      width: '60%',
      alignSelf: 'center',
    },
  },
}));
