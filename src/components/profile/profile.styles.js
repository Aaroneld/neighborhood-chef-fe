import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  root: {
    borderRadius: '10px',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    boxShadow: 'none',
    borderTopRightRadius: '0',
    background: 'transparent',

    [theme.breakpoints.down('lg')]: {
      overflowY: 'scroll',
    },

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

      '& #upload-image-div': {
        backgroundImage: (props) => props.user && `url(${props.user.photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '20%',
        paddingTop: '20%',
        borderRadius: '100%',
        cursor: 'pointer',
        border: '5px solid #58D573',
        marginTop: '1%',
        '&:hover': {
          filter: 'brightness(70%)',
        },
      },

      '& #non-loggedin-user-img': {
        backgroundImage: (props) => props.user && `url(${props.user.photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '20%',
        paddingTop: '20%',
        borderRadius: '100%',
        border: '5px solid #58D573',
        marginTop: '1%',
      },

      '& h2': {
        margin: '5px 0',
        fontSize: '3rem',
        fontWeight: 'bold',
      },

      '& div': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& :nth-child(2)': {
          margin: '0 2%',
        },
        '& h6': {
          color: '#4E4E4E',
          fontWeight: '600',
          cursor: 'pointer',
        },
      },
    },

    '& .mainContainer': {
      display: 'flex',
      width: '100%',
      height: '100%',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },

      '& .leftSide': {
        display: 'flex',
        flexDirection: 'column',
        width: (props) => (props.user && props.user.UserEvents.owned.length > 0 ? '50%' : '100%'),
        marginRight: '1%',

        [theme.breakpoints.down('lg')]: {
          height: '100%',
        },

        [theme.breakpoints.down('md')]: {
          width: () => '100%',
        },

        '& .details': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '20px',
          color: '#868686',

          '& .bio': {
            wordBreak: 'break-word',

            '& h6': {
              color: '#4E4E4E',
              fontWeight: '700',
              marginBottom: '5px',
            },
          },

          '& .textIconContainer': {
            display: 'flex',
            flexDirection: 'column',
            margin: '15px 0',
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
        height: '95%',
        marginTop: '16px',
        [theme.breakpoints.down('md')]: {
          width: '100%',
          height: '100%',
          marginTop: '0',
        },

        '& h6': {
          color: '#4E4E4E',
          fontWeight: '700',
          paddingLeft: '10px',
          textAlign: 'center',

          [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
          },
        },

        '& div': {
          overflowY: 'scroll',
          msOverflowStyle: 'none' /* Hide scrollbar for IE and Edge */,
          scrollbarWidth: 'none' /* Hide scrollbar for Firefox */,
          '&::-webkit-scrollbar': {
            display: 'none' /* Hide scrollbar for Chrome, Safari and Opera */,
          },

          '& .eventContainer': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            minHeight: '100%',
            height: '100%',
            alignSelf: 'center',
            zIndex: 3,
            paddingTop: '10px',
            paddingLeft: '20px',
            [theme.breakpoints.down('md')]: {
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: '20px',
              paddingLeft: '0',
            },

            [theme.breakpoints.down('sm')]: {
              flexWrap: 'noWrap',
              flexDirection: 'column',
            },

            '& .eventCard': {
              borderRadius: '10px',
              width: '96%',
              marginBottom: '2%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '5px',
              textAlign: 'center',
              height: '100%',
              minHeight: 225,
              msOverflowStyle: 'none' /* Hide scrollbar for IE and Edge */,
              scrollbarWidth: 'none' /* Hide scrollbar for Firefox */,
              '&::-webkit-scrollbar': {
                display: 'none' /* Hide scrollbar for Chrome, Safari and Opera */,
              },
              [theme.breakpoints.down('md')]: {
                width: '45%',
                margin: '1%',
              },
              [theme.breakpoints.down('sm')]: {
                width: '96%',
              },
              '& .iconContainer': {
                display: 'flex',
                justifyContent: 'flex-end',

                '& svg': {
                  fontSize: '2.5rem',
                  cursor: 'pointer',
                  margin: '.5%',
                },
              },
            },
          },
        },
      },
    },
  },
}));
