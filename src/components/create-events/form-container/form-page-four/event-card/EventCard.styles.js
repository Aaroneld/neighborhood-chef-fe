import { makeStyles } from '@material-ui/core/styles';

export const eventCardStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #f3f3f3',
    boxShadow: '0px 4px 15px rgba(179, 179, 179, 0.1)',
    borderRadius: '25px',
    padding: '30px',
    width: '90%',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    width: '100%',
    minHeight: '200px',
    alignItems: 'flex-start',
    [theme.breakpoints.down('800')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '90%',
    },
  },
  img: {
    width: '30%',
    boxShadow: "5px 5px 12px 1px rgba(25,25,25,0.28)",
    paddingTop: "16.875%",
    borderRadius: '25px',
    background: 'black',
    backgroundImage: props => `url(${props.photo})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
    
  },
  grayText: {
    color: 'rgba(0, 0, 0, 0.35)',
  },
  greenText: {
    color: '#82DF96',
    fontWeight: '500',
  },
  redText: {
    color: '#ea6565',
    fontWeight: '500',
  },
  h3: {
    fontSize: '2.5rem',
    fontWeight: '500',
    color: '#1A0F2C',
    marginBottom: '5px',

    [theme.breakpoints.down('md')]: {
      fontSize: "180%"
    }
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: '30px',
    textAlign: 'left',
    width: '50%',
    [theme.breakpoints.down('800')]: {
      width: '96%',
      marginTop: '3%',
      marginLeft: "-2%"
    },

    [theme.breakpoints.down("sm")]: {
     
    }
  },
  button: {
    background: '#82df96',
    padding: '15px 20px',
    borderRadius: '5px',
    marginLeft: '5%',
    color: 'white',
    outline: 'none',
    fontSize: '2rem',
    fontWeight: 'bold',
    width: '15%',
    [theme.breakpoints.down('800')]: {
      width: '25%',
    },
  },
}));
