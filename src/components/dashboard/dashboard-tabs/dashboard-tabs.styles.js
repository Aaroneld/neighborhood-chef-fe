// @ts-nocheck
import { makeStyles } from '@material-ui/core/styles';
import tabImage from '../../../assets/tab.svg';

export const DashboardTabStyles = makeStyles((theme) => ({
  container: {
    margin: '-9%',
    marginLeft: '-15%',
    marginTop: '-8.8%',
    maxWidth: '79vw',
    width: '55%',
    height: '5vw',
    borderBottom: '1px solid #58D573',
    position: 'absolute',

    [theme.breakpoints.down('lg')]: {
      marginTop: '-9.4%',
    },

    [theme.breakpoints.down('md')]: {
      width: '90%',
      maxWidth: '100%',
      marginLeft: '-10%',
      marginTop: '-6.8%',
    },

    [theme.breakpoints.down('sm')]: {
      maxWidth: '100vw',
      marginTop: '-8%',
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: '-15%',
      marginLeft: '-10.5%',
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
        top: '-.6vw',
        left: (props) => {
          if (props.currentTab === 1) return '-2%';
          else if (props.currentTab === 2) return '33%';
          else return '65%';
        },
      },

      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '4.5vw',
        left: (props) => {
          if (props.currentTab === 1) return '-.5%';
          else if (props.currentTab === 2) return '33%';
          else return '66%';
        },
      },

      [theme.breakpoints.down('sm')]: {
        height: '5.5vw',
        width: '40%',
        top: '-.7vw',
        left: (props) => {
          if (props.currentTab === 1) return '-3.4%';
          else if (props.currentTab === 2) return '32.2%';
          else return '66%';
        },
      },

      [theme.breakpoints.down('xs')]: {
        height: '5.5vw',
        top: '-.4vw',
        left: (props) => {
          if (props.currentTab === 1) return '-1.9%';
          else if (props.currentTab === 2) return '31.7%';
          else return '64.5%';
        },
      },
    },
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      marginTop: '.3%',
    },

    [theme.breakpoints.down('md')]: {
      marginTop: '-1.5%',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '-1.65%',
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: '-2.3%',
    },
  },
  tab: {
    fontSize: '140%',
    color: 'black',
    opacity: 0.5,
    padding: '.25% 7% 4% 7%',
    fontWeight: '200',

    [theme.breakpoints.down('lg')]: {
      fontSize: '120%',
      padding: '0% 7% 4% 7%',
    },

    [theme.breakpoints.down('md')]: {
      marginTop: '-.25%',
      fontSize: '130%',
      padding: '.5% 7% 4% 7%',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '95%',
      whiteSpace: 'nowrap',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '80%',
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
    },
  },
  currentTab: {
    color: 'white',
    opacity: 1,
  },
}));
