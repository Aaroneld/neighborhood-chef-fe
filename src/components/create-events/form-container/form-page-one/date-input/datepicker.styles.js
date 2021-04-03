import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: '100%',
    paddingTop: '75%',
    border: '2px solid #f0f0f0',
    borderRadius: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    fontFamily: '"Poppins", san-serif',

    '& >div': {
      position: 'absolute',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2%',
      width: '100%',

      '& .display': {
        width: '92%',
        padding: '0 7% 0 5%',
        margin: '2.5% 0 5% 0',
        display: 'flex',
        justifyContent: 'space-between',

        fontSize: '130%',

        '& .year-month-button': {},

        '& >*:first-child': {
          justifySelf: 'start',
          fontWeight: 'lighter',
          color: 'grey',
        },

        '& >*:last-child': {
          display: 'flex',

          '&::before': {
            content: '""',
            width: '25%',
            right: '9%',
            top: '5.5%',
            borderRadius: '10px',
            paddingTop: '7%',
            background: 'grey',
            opacity: 0,
            position: 'absolute',
          },

          '&:hover:before': {
            opacity: '.5',
          },

          '& >*:first-child': {
            marginLeft: '-6%',
            marginRight: '5%',
          },

          '& >*': {
            fontWeight: 'bolder',
          },
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
          fontSize: '95%',
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
              top: '-45%',
              left: '20%',
              width: '60%',
              paddingTop: '60%',
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
            top: '-45%',
            left: '20%',
            width: '60%',
            paddingTop: '60%',
            borderRadius: '100%',
          },
        },
      },
    },
  },
}));
