import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  root: {
    borderRadius: '10px',
    height: '100%',
    width: '100%',
    boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
    background: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    [theme.breakpoints.down('lg')]: {
      overflowY: 'scroll',
    },

    '& h4': {
      fontWeight: 'bold',
      fontSize: 'rem',
      textAlign: 'center',
    },

    '& .main': {
      padding: '4px 20px',
      marginTop: ".5%",
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    
      marginLeft: '10%',
      [theme.breakpoints.down('md')]: {
        marginLeft: '0',
      },

      '& .textInputContainer': {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        margin: '10px 0',
        wordBreak: 'break-word',
        [theme.breakpoints.down('md')]: {
          width: '100%',
        },

        '& label': {
          color: 'black',
          opacity: 0.5,
          marginBottom: '5px',
        },

        '& input': {
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          justifyContent: 'space-between',
          border: '2px solid #f0f0f0',
          borderRadius: '15px',
          padding: '14px',
          background: 'white',
          fontSize: '1.6rem',
          outline: 'none',
          width: '100%',
        },
        '& .textarea': {
          border: '2px solid #f0f0f0',
          borderRadius: '15px',
          outline: 'none',
          padding: '1.5% 10px 60px 1.5%',
          fontSize: '1.6rem',
          width: '100%',
          whiteSpace: 'wrap',
          resize: 'none',
          fontFamily: '"Arial", sans-serif',
          overflow: 'hidden',
          [theme.breakpoints.down('lg')]: {
            padding: '10px 10px 60px 10px',
          },
          [theme.breakpoints.down('sm')]: {
            padding: '10px 10px 100px 10px',
          },
          [theme.breakpoints.down('xs')]: {
            padding: '10px 10px 120px 10px',
          },

          '&::placeholder': {
            color: '#b7b7b7',
            textIndent: '.5%',
            fontFamily: '"Arial", sans-serif',
          },
        },
        '& select': {
          padding: '14px',
          border: '2px solid #f0f0f0',
          borderRadius: '15px',
          outline: 'none',
          cursor: 'pointer',
          fontSize: '1.6rem',
          width: '100%',
        },
      },
      '& .mapboxContainer': {
        width: '60%',
        [theme.breakpoints.down('md')]: {
          width: '100%',
        },
        '& label': {
          color: 'black',
          opacity: 0.5,
          marginBottom: '5px',
        },
        '& .geocoderDiv': {
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          justifyContent: 'space-between',
          border: '2px solid #f0f0f0',
          borderRadius: '15px',
          padding: '14px',
          background: 'white',
          fontSize: '1.6rem',
          width: '100%',

          '& input': {
            border: 'none',
            fontSize: '1.6rem',
            outline: 'none',
            minWidth: '500px',

            [theme.breakpoints.down('sm')]: {
              minWidth: '340px',
            },
            [theme.breakpoints.down('xs')]: {
              minWidth: '240px',
            },
          },
        },
      },
      '& #form-buttons': {
        width: '96%',
        marginTop: "12%",
        [theme.breakpoints.down('md')]: {
          width: '100%',
          margin: '5px 0',
        },
        '& button': {
          padding: '1% 5%',
        },
      },
    },
    '& .message': {
      textAlign: 'center',
    },
  },
}));
