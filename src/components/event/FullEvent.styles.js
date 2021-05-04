import { makeStyles } from '@material-ui/core/styles';

export const fullEventStyles = makeStyles((theme) => ({
  singleEventContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: '20px',
    boxShadow: 'none',
    background: 'transparent',
    borderTopRightRadius: '0',
    height: '100%',

    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      borderRadius: '20px',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  singleEventBox: {
    padding: '10px',
    borderRadius: '10px',
    height: '80vh',
    maxHeight: 'calc(90vh - 20px)',
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      maxHeight: '100%',
      height: '100%',
      marginLeft: '1%',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  singleEventRightColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '80vh',
    background: 'transparent',
    position: 'relative',

    [theme.breakpoints.down('md')]: {
      margin: '1% 0%',
    },
  },
  singleEventTopRow: {
    display: 'flex',
    flexBasis: '20%',
    overflowY: 'hidden',

    [theme.breakpoints.down('md')]: {
      flexBasis: 0,
    },
  },
  singleEventCommentCard: {
    height: '77.7%',
    left: '1%',
    width: '98%',
    overflowY: 'hidden',
    position: 'absolute',
    zIndex: 10,
    top: '21%',
    borderRadius: '20px',
    boxShadow: '-2px 3px 31px -13px rgb(117 117 117 / 46%)',
    background: 'transparent',

    [theme.breakpoints.down('md')]: {
      position: 'static',
      width: '97.25%',
      margin: '0 1%',
    },
  },
  hidden: {
    display: 'none',
  },
  emojiContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));
