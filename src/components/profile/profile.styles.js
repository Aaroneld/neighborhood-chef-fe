import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  root: {
    background: '#f2f2f2',
    borderRadius: '10px',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',

    '& .card': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      marginBottom: '40px',

      '& .header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        padding: '20px',
        marginTop: '30px',

        '& .avatar': {
          width: '200px',
          height: '200px',
          fontSize: '5rem',
          border: '5px solid rgba(33, 186, 66, 0.75)',
          padding: '5px',
        },

        '& h2': {
          fontWeight: 'bold',
          padding: '5px',
        },
      },
      '& .addBio': {
        cursor: 'pointer',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'rgba(33, 186, 66, 0.75)',
      },

      '& .details': {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',

        '& .textIconContainer': {
          display: 'flex',
          alignItems: 'center',
          margin: '5px 0',
        },
      },
    },
    '& .eventContainer': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      margin: '30px 0',

      '& .events': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      },
    },
  },
}));
