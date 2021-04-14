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

        [theme.breakpoints.down('lg')]: {
          fontSize: '95%',
        },

        [theme.breakpoints.down('md')]: {
          fontSize: '115%',
        },

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
            width: '19%',
            right: '11%',
            top: '5.5%',
            borderRadius: '10px',
            paddingTop: '7%',
            background: 'grey',
            opacity: 0,
            position: 'absolute',

            [theme.breakpoints.down('lg')]: {
                width: "23%",
                right: "10%",
                paddingTop: '8%'
            },

            [theme.breakpoints.down('md')]: {
              width: '16%',
            },
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

          [theme.breakpoints.down('lg')]: {
            fontSize: '60%',
          },

          [theme.breakpoints.down('md')]: {
            fontSize: '85%',
          },

          [theme.breakpoints.down('sm')]: {
            fontSize: '65%',
          },
        },

        '&  .day': {
          fontWeight: 'bolder',
        },

        '& .prevMonthDay': {
          color: 'lightgrey',
        },

        '& :not(.day):not(.selected):not(.prevMonthDay)': {
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

              [theme.breakpoints.down('lg')]: {
                top: '-42%',
                left: '22%',
                width: '57%',
                paddingTop: '57%',
              },

              [theme.breakpoints.down('md')]: {
                top: '-45%',
                left: '28%',
                width: '45%',
                paddingTop: '45%',
              },
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

            [theme.breakpoints.down('lg')]: {
              top: '-42%',
              left: '22%',
              width: '57%',
              paddingTop: '57%',
            },

            [theme.breakpoints.down('md')]: {
              top: '-45%',
              left: '28%',
              width: '45%',
              paddingTop: '45%',
            },

            [theme.breakpoints.down('sm')]: {
              top: '-30%',
              left: '25%',
              width: '52%',
              paddingTop: '52%',
            },
          },
        },
      },
    },
  },
}));
