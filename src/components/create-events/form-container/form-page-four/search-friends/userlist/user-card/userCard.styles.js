import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    margin: '5px',
  },

  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '60px',
    marginRight: "2%"
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

      '& #name': {
        [theme.breakpoints.down('sm')]: {
          fontSize: '.9rem',
          whiteSpace: "nowrap"
        },
      },
    },

    '& #email': {
      color: '#000000',
      opacity: '0.3',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  },
}));
