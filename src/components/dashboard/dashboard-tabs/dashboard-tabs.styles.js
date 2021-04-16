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
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100vw',
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
    },
    [theme.breakpoints.down('lg')]: {
      width: '70%',
      marginTop: '.1%',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '.1%',
    },
  },
  tab: {
    fontSize: "140%",
    color: 'black',
    opacity: .5,
    padding: '.25% 7% 4% 7%',
    fontWeight: "200"
  },
  currentTab: {
    color: 'white',
    opacity: 1
  },
}));
