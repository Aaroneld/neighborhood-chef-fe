import makeStyles from '@material-ui/styles/makeStyles';
//viewports fucked?
export const styles = makeStyles((theme) => ({
  container: {
    paddingRight: '20px',
    width: '100%',

    '& div': {
      width: '100%',
      '& nav': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',

        [theme.breakpoints.down('md')]: {
          marginTop: '2%',
          flexDirection: 'row',
          flexWrap: 'no-wrap',
          justifyContent: 'center',
        },

        '& a': {
          width: '100%',

          [theme.breakpoints.down('md')]: {
            width: '33%',
            margin: '0 1%',
          },

          '& button': {
            margin: 0,
            paddingRight: '20%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',

            [theme.breakpoints.down('md')]: {
              padding: '6% 5%',
              justifyContent: 'space-around',
            },

            '&  span': {
              fontSize: '150%',
              [theme.breakpoints.down('lg')]: {
                fontSize: '130%',
              },

              [theme.breakpoints.down('md')]: {
                fontSize: '120%',
                display: 'flex',
                justifyContent: 'center',
              },

              '& span': {
                marginLeft: '6%',
                whiteSpace: 'nowrap',

                [theme.breakpoints.down('md')]: {
                  marginLeft: 0,
                },
              },

              '& >span:last-child': {
                [theme.breakpoints.down('md')]: {
                  marginBottom: '-3%',
                  marginLeft: '4%',
                },
              },

              '& svg': {
                fontSize: '170%',
                marginTop: '25%',

                [theme.breakpoints.down('md')]: {
                  marginTop: 0,
                  fontSize: '200%',
                },
              },
            },
          },
        },
      },
    },
  },
}));
