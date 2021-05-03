import { makeStyles } from '@material-ui/core/styles';

export const calendarStyles = makeStyles((theme) => ({
  componentMain: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '80vw',
    height: '82vh',
    background: 'transparent',
    boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
    borderRadius: '20px',
    borderTopRightRadius: '0',

    [theme.breakpoints.down('md')]: {
      maxWidth: '100vw',
      width: '100vw',
    },
  },
  calendarViewMain: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10px',
    overflowY: 'hidden',
    height: '80vh',
    paddingRight: '6px',

    '&:hover': {
      overflowY: 'scroll',
      paddingRight: 0,
    },
  },
  calendarRow: {
    background: 'transparent',
    borderRadius: '10px',
    padding: '10px 50px',
    marginBottom: '20px',
    width: '98%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      padding: '10px 100px',
      margin: '10px auto',
      width: '96%',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '10px 20px',
    },
  },
  calendarRowEven: {
    background: '#f2f2f2',
  },
  calendarRowActive: {
    clipPath: 'polygon(92% 0, 100% 46%, 100% 54%, 92% 100%, 0 100%, 0% 0%)',
    background: 'rgba(88, 212, 115, 0.1)',
    [theme.breakpoints.down('md')]: {
      clipPath: 'polygon(0, 0, 0, 0)',
    },
  },
  monthPickerContainer: {
    background: '#f2f2f2',
    borderRadius: '10px',
    padding: '10px',
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'rgba(0, 0, 0, 0.5)',
    alignSelf: 'center',
    marginTop: '-.5%',
    [theme.breakpoints.down('lg')]: {
      marginLeft: '10%',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '-18%',
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginLeft: '-18%',
      padding: '10px 10px 7px 10px',
    },

    '& h6': {
      [theme.breakpoints.down('sm')]: {
        marginTop: '1%',
      },
    },
  },
  middleCalendar: {
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
      margin: '0 auto',
    },
  },
  rightSideCalendar: {
    display: 'flex',
    background: 'transparent',
    boxShadow: '-2px 3px 31px -13px rgba(117,117,117,0.46)',
    height: '80vh',
    borderRadius: '20px',
    padding: '10px',
    marginTop: '10px',
    width: '33%',
    position: 'fixed',
    left: '65%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  accountbutton: {
    textAlign: 'right',
  },
  greenLink: {
    color: '#58d473',
  },
  eventPopup: {
    padding: '10px 50px',
    width: '98%',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export const cardStyles = makeStyles((theme) => ({
  root: {
    margin: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px',
    wordWrap: 'break-word',
    //these next two lines hide scrollbars on cards
    '&::-webkit-scrollbar': { display: 'none' },
    '-ms-overflow-style': 'none',
  },
  fullEvent: {
    maxWidth: '100%',
    height: 'calc(100% - 24px)',
    background: 'transparent',
    boxShadow: 'none',
  },
  addressContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  statusButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '10px',

    '& div': {
      width: '100%',

      '& button': {
        width: '30%',
      },
    },
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateOverlay: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    background: '#f8f8f8',
    borderRadius: '8px',
    marginTop: '-14%',
    marginLeft: '5%',
    alignSelf: 'left',
    width: '46px',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    fontSize: '2rem',
    marginRight: '5px',
    cursor: 'pointer',
    color: 'black',
    opacity: '.5',
  },
  img: {
    maxHeight: '40%',
  },
  dashboardImg: {
    maxHeight: '20%',
  },
  span: {
    marginRight: '5px',
    verticalAlign: 'middle',
  },
  title: {
    wordWrap: 'break-word',
    maxWidth: '440px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  participants: {
    maxHeight: 150,
    width: '100%',
    maxWidth: '100%',
    justifyContent: 'flex-start',
  },
  landingPage: {
    justifyContent: 'space-between',
    height: 'auto',
    maxHeight: '100%',
    overflow: 'auto',
    alignItems: 'center',
    alignSelf: 'center',
  },
  media: {
    height: 0,
    paddingTop: '40%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#e8e8e8',
    color: 'black',
    letterSpacing: '3px',
  },
}));
