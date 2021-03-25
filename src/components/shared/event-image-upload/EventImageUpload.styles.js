import { makeStyles } from '@material-ui/core/styles';

export const eventImageUploadStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  p: {
    marginTop: '10px',
    marginBottom: '25px',
    textAlign: 'left',
  },
  button: {
    marginTop: '3%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',

    '& label': {
      width: '70%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  img: {
    width: '40%',
    borderRadius: '100%',
    cursor: 'pointer',
    border: ' 5px solid #58D573',
  },
}));
