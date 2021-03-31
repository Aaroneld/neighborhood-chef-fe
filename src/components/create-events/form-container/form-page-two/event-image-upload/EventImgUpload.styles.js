import { makeStyles } from '@material-ui/core/styles';

export const eventImageUploadStyles = makeStyles((theme) => ({
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
  imgBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
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
    maxWidth: '40%',
    maxHeight: '120px',
    borderRadius: '10px',
    border: '2px solid rgba(0,0,0,.4)',
    cursor: 'pointer',
    '&:hover': {
      filter: 'brightness(70%)',
    },
  },
}));
