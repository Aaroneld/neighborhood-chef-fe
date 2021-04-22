import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => ({
  root: {
    borderRadius: '10px',
    height: '100%',
    width: '100%',
    boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
    background: "transparent",
  

    '& .main': {
      padding: '20px',
      '& .textIconContainer': {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px 0',
        wordBreak: 'break-word',

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
}));
