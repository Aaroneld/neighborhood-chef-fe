import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  container: {
    width: '70%',
    paddingTop: '70%',
    position: 'absolute',
    left: '30.5%',
    top: '-1%',
    border: '2px solid #f0f0f0',
    borderRadius: '30px',

    background: 'white',
    zIndex: 3,
    fontSize: '120%',

    [theme.breakpoints.down('lg')]: {
      fontSize: '90%',
    },

    [theme.breakpoints.down('md')]: {
      fontSize: '130%',
      paddingTop: '58%',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '97%',
      paddingTop: '65%',
    },

    '& >div': {
      position: 'absolute',
      top: 0,
      left: '5%',
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',

      '& >*:first-child': {
        margin: '5% 0',
        fontSize: '200%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        [theme.breakpoints.down('lg')]: {
          fontSize: '150%',
        },

        [theme.breakpoints.down('md')]: {
          fontSize: '170%',
        },

        '& >*:nth-child(2)': {
          margin: '0 5%',
        },
      },

      '& .month-picker': {
        display: 'flex',
        flexWrap: 'wrap',

        '& >*': {
          flexBasis: '33%',
          marginBottom: '10%',
          position: 'relative',
        },

        '& :not(.selected-month)': {
          '&:hover': {
            color: 'white',
            '&::before': {
              content: '""',
              color: 'green',
              zIndex: '-1',
              background: 'lightgrey',
              position: 'absolute',
              top: '-38%',
              left: '13%',
              width: '75%',
              paddingTop: '50%',
              borderRadius: '10px',

              [theme.breakpoints.down('md')]: {
                width: '60%',
                paddingTop: '40%',
                left: '20%',
              },

              [theme.breakpoints.down('sm')]: {
                top: '-22%',
              },
            },
          },
        },

        '& .selected-month': {
          color: 'white',

          '&::before': {
            content: '""',
            color: 'green',
            zIndex: '-1',
            background: 'cyan',
            position: 'absolute',
            top: '-38%',
            left: '13%',
            width: '75%',
            paddingTop: '50%',
            borderRadius: '10px',

            [theme.breakpoints.down('md')]: {
              width: '60%',
              paddingTop: '40%',
              left: '20%',
            },

            [theme.breakpoints.down('sm')]: {
              top: '-22%',
            },
          },
        },
      },
    },
  },
}));
