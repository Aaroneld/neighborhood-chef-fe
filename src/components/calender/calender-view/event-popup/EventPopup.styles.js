import { makeStyles } from '@material-ui/core/styles';

export const cardStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '90%',
    justifyContent: 'center',
    marginLeft: '2%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },

    '& img': {
      maxWidth: '30%',
      maxHeight: '136px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    '& .container': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '70%',
      marginLeft: '1%',
      fontSize: '1.2rem',
      '& a, & p, & span': {
        textAlign: 'left',
      },
      '& .buttons': {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'left',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          textAlign: 'center',
        },
        '& div': {
          '& button': {
            [theme.breakpoints.down('sm')]: {
              width: '30%',
              fontSize: '1.2rem',
            },
          },
        },
      },
      [theme.breakpoints.down('sm')]: {
        width: '80%',
        marginLeft: '10%',
        justifyContent: 'center',
        '& a, & p, & span': {
          textAlign: 'center',
        },
      },
    },
  },
}));
