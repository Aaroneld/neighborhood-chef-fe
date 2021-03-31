import { makeStyles } from '@material-ui/core/styles';

export const eventImageUploadStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  p: {
    marginTop: '10px',
    marginBottom: '10px',
    textAlign: 'left',
  },
  imgBtn: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: '3%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',

    '& label': {
      width: '70%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  img: {
    width: '35%',
    borderRadius: '100%',
    cursor: 'pointer',
    border: '5px solid #58D573',
    '&:hover': {
      filter: 'brightness(70%)',
    },
  },
}));
