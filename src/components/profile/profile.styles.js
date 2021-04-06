import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  root: {
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
      justifyContent: 'flexStart',
      flexDirection: 'column',
      width: '50%',
      padding: '5px',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },

      '& .avatar': {
        width: '200px',
        height: '200px',
        fontSize: '5rem',
        border: '6px solid rgba(33, 186, 66, 0.75)',
        padding: '5px',
        margin: '5px 0',
      },

      '& h2': {
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
        borderBottom: '1px solid black',

        [theme.breakpoints.down('md')]: {
          width: '100%',
          marginBottom: '1%',
        },

        '& .details': {
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',

          '& .textIconContainer': {
            display: 'flex',
            alignItems: 'center',
            margin: '10px 0',
          },
        },
        '& .buttons': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          '& button': {
            width: '55%',
            margin: '5px 0',
            fontSize: '1.8rem',
            color: 'white',
            height: '45px',
            outline: 'none',
            marginBottom: '30px',
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
        width: '50%',
        height: '500px',
        maxHeight: '500',
        overflowY: 'auto',
        whiteSpace: 'no-wrap',
        borderBottom: '1px solid black',
        background: '#f2f2f2',

        // [theme.breakpoints.down('md')]: {
        //   width: '100%',
        //   marginLeft: '0',
        // },

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
