import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '20vw',
    minHeight: '20vw',
    border: '2px solid lightgrey',
    transform: 'translate(-50%, -50%)',
    borderRadius: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    fontFamily: '"Poppins", san-serif',

    paddingBottom: '1%',

    '& .display': {
      width: '78%',
      margin: '5% 0',
      display: 'flex',
      justifyContent: 'space-between',

      fontSize: '150%',

      '& >*:first-child': {
        justifySelf: 'start',
        marginLeft: '-3%',
        fontWeight: 'lighter',
        color: 'grey',
      },

      '& >*:last-child': {
        display: 'flex',

        '& >*:first-child': {
          marginLeft: '-6%',
          marginRight: '5%'
        },

        '& >*': {
          fontWeight: 'bolder',
        }
      },
    },

    '& .picker': {
      width: '92%',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',

      '& >*': {
        position: 'relative',
        zIndex: '1',
        marginBottom: '5%',
        flexBasis: '14%',
        fontSize: '120%',
        alignSelf: 'center',
        justifySelf: 'center',
        textAlign: 'center',
      },

      '&  .day': {
        fontWeight: 'bolder',
      },

      '& .prevMonthDay': {
        color: 'lightgrey',
      },

      '& :not(.day):not(.selected)': {
        '&:hover': {
          color: 'white',
          '&::before': {
            content: '""',
            color: 'green',
            zIndex: '-1',
            background: 'lightgrey',
            position: 'absolute',
            top: '-50%',
            left: '16%',
            width: '70%',
            height: '200%',
            borderRadius: '100%',
          },
        },
      },

      '& .selected': {
        color: 'white',
        '&::before': {
          content: '""',
          color: 'green',
          zIndex: '-1',
          background: '#58D573',
          position: 'absolute',
          top: '-50%',
          left: '16%',
          width: '70%',
          height: '200%',
          borderRadius: '100%',
        },
      },
    },
  },
}));
