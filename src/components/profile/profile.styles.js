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
      width: '100%',
      padding: '5px',
      color: '#4E4E4E',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },

      '& .avatar': {
        width: '180px',
        height: '180px',
        fontSize: '5rem',
        border: '6px solid rgba(33, 186, 66, 0.75)',
        padding: '5px',
        marginTop: '20px',
      },

      '& h2': {
        margin: '5px 0',
      },

      '& div': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& :nth-child(2)': {
          margin: '0 2%',
          color: 'rgba(33, 186, 66, 0.75)',
        },
        '& h6': {
          color: '#4E4E4E',
          fontWeight: '600',
          marginBottom: '5px',
          cursor: 'pointer',
        },
      },
    },

    '& .mainContainer': {
      display: 'flex',
      width: '100%',
      paddingTop: '5px',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },

      '& .leftSide': {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        marginRight: '1%',
        maxHeight: '70vh',

        [theme.breakpoints.down('md')]: {
          width: '100%',
        },

        '& .details': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '20px',
          color: '#868686',

          '& .bio': {
            '& h6': {
              color: '#4E4E4E',
              fontWeight: '700',
              marginBottom: '5px',
            },
          },

          '& .textIconContainer': {
            display: 'flex',
            flexDirection: 'column',
            margin: '20px 0',
            wordBreak: 'break-word',
            width: '95%',

            '& h6': {
              color: '#4E4E4E',
              fontWeight: '700',
              marginBottom: '5px',
            },

            '& div': {
              display: 'flex',
              alignItems: 'center',
              '& a': {
                color: 'rgba(0, 0, 0, 0.54)',
              },
            },
          },
        },
      },
      '& .rightSide': {
        width: '50%',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        height: '70vh',
        marginTop: '16px',
        [theme.breakpoints.down('md')]: {
          width: '100%',
          height: '100%',
        },

        '& h6': {
          color: '#4E4E4E',
          fontWeight: '700',
          marginBottom: '5px',
          paddingLeft: '10px',
          [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
          },
        },

        '& div': {
          overflowY: 'scroll',

          '& .eventContainer': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            margin: '10px 0',
            minsHeight: '100%',
            height: '100%',
            alignSelf: 'center',
            zIndex: 3,
            [theme.breakpoints.down('md')]: {
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
            },

            [theme.breakpoints.down('sm')]: {
              flexWrap: 'noWrap',
              flexDirection: 'column',
            },

            '& .eventCard': {
              width: '96%',
              marginBottom: '2%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '5px',
              cursor: 'pointer',
              textAlign: 'center',
              height: 'calc(100% - 36px)',
              minHeight: 200,
              maxHeight: 200,
              [theme.breakpoints.down('md')]: {
                width: '45%',
              },
              [theme.breakpoints.down('sm')]: {
                width: '96%',
              },
            },
          },
        },
      },
    },
  },
}));
