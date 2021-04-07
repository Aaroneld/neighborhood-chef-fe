import { makeStyles } from '@material-ui/core/styles';

export const calendarStyles = makeStyles((theme) => ({
  componentMain: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100vh',
  },
  calendarViewMain: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10px',
    justifyContent: 'center',
  },
  calendarRow: {
    background: 'white',
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
    marginLeft: '30%',
    [theme.breakpoints.down('lg')]: {
      marginLeft: '30%',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '25%',
    },
  },
  middleCalendar: {
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
      margin: '0 auto',
    },
  },
  rightSideCalendar: {
    display: 'flex',
    background: '#f2f2f2',
    height: '85vh',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '10px',
    width: '35%',
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
