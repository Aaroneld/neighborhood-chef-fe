import { makeStyles } from '@material-ui/core/styles';

export const fullEventStyles = makeStyles((theme) => ({
  singleEventContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: '20px',
    boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
    borderTopRightRadius: '0',
    height: '100%',

    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      borderRadius: '20px',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '-10%',
    },
  },
  singleEventBox: {
    padding: '10px',
    borderRadius: '10px',
    height: 'calc(90vh - 20px)',
    maxHeight: 'calc(90vh - 20px)',
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
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
    height: '100%',
  },
  singleEventTopRow: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
    },
  },
  singleEventCommentCard: {
    maxHeight: '72%',
    minHeight: '72%',
  },
  hidden: {
    display: 'none',
  },
  emojiContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));
