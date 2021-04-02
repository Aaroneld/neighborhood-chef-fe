import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  root: {
    background: '#f2f2f2',
    borderRadius: '10px',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',

    '& .card': {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',

      '& .header': {
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        padding: '20px',

        '& .avatar': {
          minWidth: '200px',
          minHeight: '200px',
        },
      },
    },
  },
}));
