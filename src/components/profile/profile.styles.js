import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  root: {
    background: '#f2f2f2',
    borderRadius: '10px',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '10px',

    '& .header': {
      marginBottom: '.5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      padding: '5px',

      '& .avatar': {
        width: '200px',
        height: '200px',
        fontSize: '5rem',
        border: '5px solid rgba(33, 186, 66, 0.75)',
        padding: '5px',
        margin: '5px 0',
      },

      '& h2': {
        fontWeight: 'bold',
        margin: '5px 0',
      },

      '& .addBio': {
        cursor: 'pointer',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'rgba(33, 186, 66, 0.75)',
      },
    },

    '& .bottomSection': {
      display: 'flex',
      width: '100%',
      paddingTop: '5px',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },

      '& .leftCard': {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        paddingRight: '5px',
        maxHeight: '400px',
        [theme.breakpoints.down('md')]: {
          width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
          marginBottom: '2%',
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
            width: '50%',
            margin: '5px 0',
            fontSize: '1.8rem',
            color: 'white',
            height: '45px',
            outline: 'none',
            '&:hover': {
              filter: 'brightness(0.8)',
            },
            [theme.breakpoints.down('sm')]: {
              width: '80%',
            },
          },
        },
      },
      '& .rightCard': {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        marginLeft: '1%',

        [theme.breakpoints.down('md')]: {
          width: '100%',
          marginLeft: '0',
        },

        '& .eventContainer': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',

          '& h5': {
            marginTop: '15px',
          },

          '& .events': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
          },
        },
      },
    },
  },
}));
