import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  container: {
    paddingRight: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& div': {
      width: '100%',
      '& nav': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',

        '& a': {
          width: '100%',
          '& button': {
            paddingRight: '20%',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            '&  span': {
              fontSize: '150%',

              '& span': {
                marginLeft: '6%',
                whiteSpace: 'nowrap',
              },

              '& svg': {
                fontSize: '170%',
                marginTop: '25%',
              },
            },
          },
        },
      },
    },
  },
}));
