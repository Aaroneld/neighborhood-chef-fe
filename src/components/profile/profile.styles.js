import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  root: {
    borderRadius: '10px',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.36)',

    '& .header': {
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
        width: '180px',
        height: '180px',
        fontSize: '5rem',
        border: '6px solid rgba(33, 186, 66, 0.75)',
        padding: '5px',
        margin: '20px 0',
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
      background: 'transparent',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },

      '& .leftSide': {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        marginRight: '1%',
        maxHeight: '500px',
        background: 'transparent',

        [theme.breakpoints.down('md')]: {
          width: '100%',
        },

        '& .details': {
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',

          '& .textIconContainer': {
            display: 'flex',
            alignItems: 'center',
            margin: '10px 0',
            wordBreak: 'break-word',
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
      '& .rightSide': {
        width: '50%',
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '5px',
        height: '500px',
        overflowY: 'scroll',
        position: 'relative',

        [theme.breakpoints.down('md')]: {
          width: '100%',
          height: '100%',
        },

        '& .eventContainer': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: '10px',
          minsHeight: '100%',
          height: '100%',
          alignSelf: 'center',
          zIndex: 3,
        },
      },
    },
  },
}));
