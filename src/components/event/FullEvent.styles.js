import { makeStyles } from '@material-ui/core/styles';

export const fullEventStyles = makeStyles((theme) => ({
  singleEventContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: '20px',
    boxShadow: 'none',
    background: "transparent"
    ,
    borderTopRightRadius: '0',
    height: '100%',

    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      borderRadius: '20px',
      justifyContent: 'center',
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
    height: '80vh',
  },
  singleEventTopRow: {
    display: 'flex',
    flexBasis: "20.5%",
    overflowY: "hidden",

    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
    },
  },
  singleEventCommentCard: {
    flexBasis: "78%",
    overflowY: "hidden",

  },
  hidden: {
    display: 'none',
  },
  emojiContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));
