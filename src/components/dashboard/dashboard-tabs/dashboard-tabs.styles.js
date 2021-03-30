import { makeStyles } from '@material-ui/core/styles';
import tabImage from '../../../assets/tab.svg';

export const DashboardTabStyles = makeStyles({
  container: {
    margin: '-6.5%',
    // margin: '-6% 0 0 5%',
    maxWidth: '79vw',
    width: '100%',
    height: '5vw',
    borderBottom: '1px solid #43ff6b',
    position: 'absolute',
  },
  tabs: {
    margin: 0,
    marginTop: '.75%',
    display: 'flex',
    justifyContent: 'space-around',
    position: 'relative',
    width: '50%',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%)',
    background: 'transparent',
    '&::before': {
      content: '""',
      backgroundImage: `url(${tabImage})`,
      backgroundRepeat: 'no-repeat',
      height: '3vw',
      width: '43%',
      position: 'absolute',
      top: '-.4vw',
      left: (props) => {
        if (props.currentTab === 1) return '-4%';
        else if (props.currentTab === 2) return '30%';
        else return '63%';
      },
      zIndex: -1,
    },
  },
  tab: {
    color: 'black',
    padding: '1% 7% 2% 7%',
  },
  currentTab: {
    color: 'white',
  },
});
