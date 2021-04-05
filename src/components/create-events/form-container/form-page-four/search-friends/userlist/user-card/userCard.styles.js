import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    margin: '10px',
  },

  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '60px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5%',
    width: '20%',

    '& div': {
      display: 'flex',
      textAlign: 'left',
      fontSize: '1.4rem',
      color: '#1A0F2C',
      fontWeight: '500',
      lineStyle: 'normal',
    },
  },
}));
