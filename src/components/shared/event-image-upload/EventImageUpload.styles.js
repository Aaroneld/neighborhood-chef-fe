import { makeStyles } from '@material-ui/core/styles';

export const eventImageUploadStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& #upload-image-div': {
      backgroundImage: (props) => `url(${props.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '35%',
      paddingTop: '35%',
      borderRadius: '100%',
      cursor: 'pointer',
      border: '5px solid #58D573',
      margin: '3% 0',
      '&:hover': {
        filter: 'brightness(70%)',
      },

      [theme.breakpoints.down('lg')] : {
        width: '45%',
        paddingTop: '45%',
      },

      [theme.breakpoints.down('md')] : {
        width: '35%',
        paddingTop: '35%',
      }
    },
  },
  p: {
    textAlign: 'left',
    fontStyle: 'italic'
  },
  imgBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
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
}));
