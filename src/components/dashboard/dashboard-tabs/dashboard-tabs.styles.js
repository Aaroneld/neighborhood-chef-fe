import { makeStyles } from '@material-ui/core/styles';
import tabImage from '../../../assets/tab.svg';

export const DashboardTabStyles = makeStyles((theme) => ({
  container: {
    margin: '-9%',
    marginLeft: "-15%",
    //margin: '-6% 0 0 5%',
    maxWidth: '79vw',
    width: '55%',
    height: '5vw',
    borderBottom: '1px solid #58D573',
    position: 'absolute',

    [theme.breakpoints.down('lg')]: {
      marginTop: "-9.4%"
    },

    [theme.breakpoints.down('lgmd')]: {
      marginTop: "-8.4%"
    },

    [theme.breakpoints.down('md')] : {
      width: "90%",
      maxWidth: "100%",
      marginLeft: "-10%",
      marginTop: "-6.8%"
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: '100vw',
      marginTop: "-10%"
    },

    
    [theme.breakpoints.down('xs')]: {
      marginTop: "-1%"
    },
  },
  tabs: {
    margin: 0,
    marginTop: '.9%',
    display: 'flex',
    justifyContent: 'space-around',
    position: 'relative',
    width: '100%',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%)',
    background: 'transparent',
    cursor: 'pointer',
    '&::before': {
      content: '""',
      backgroundImage: `url(${tabImage})`,
      backgroundRepeat: 'no-repeat',
      height: '3vw',
      width: '32%',
      position: 'absolute',
      top: '-.4vw',
      left: (props) => {
        if (props.currentTab === 1) return '1.5%';
        else if (props.currentTab === 2) return '35.3%';
        else return '68%';
      },
      zIndex: -1,
      [theme.breakpoints.down('lg')]: {
        width: '70%',
        top: '-.5vw',
        left: (props) => {
          if (props.currentTab === 1) return '-2%';
          else if (props.currentTab === 2) return '33%';
          else return '65%';
        },
      },

      [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "4.5vw",
        left: (props) => {
          if (props.currentTab === 1) return '-.5%';
          else if (props.currentTab === 2) return '34%';
          else return '66%';
        },
      }
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      marginTop: '.3%',
    },

    [theme.breakpoints.down("md")]: {
      marginTop: '-1.7%',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '-1.65%',
    },
  },
  tab: {
    fontSize: "140%",
    color: 'black',
    opacity: .5,
    padding: '.25% 7% 4% 7%',
    fontWeight: "200",

    [theme.breakpoints.down('lg')]: {
      fontSize: "120%",
      padding: "0% 7% 4% 7%"
    },

    [theme.breakpoints.down('md')]: {
     marginTop: "-.25%",
     fontSize: "130%",
     padding: ".5% 7% 4% 7%"
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: "95%" 
     },

     [theme.breakpoints.down('xs')]: {
      fontSize: "50%" 
     }
  },
  currentTab: {
    color: 'white',
    opacity: 1
  },
}));
