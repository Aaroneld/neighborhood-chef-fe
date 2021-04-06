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

    '& .leftCard': {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      marginRight: '1%',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },

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
      '& .buttons': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& button': {
          width: '40%',
          margin: '5px 0',
        },
      },
    },
    '& .rightCard': {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      padding: '10px',

      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },

    '& .eventContainer': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',

      '& .events': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      },
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
