import { makeStyles } from '@material-ui/core/styles';

export const searchFriendsStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #f3f3f3',
    boxShadow: '0px 4px 15px rgba(179, 179, 179, 0.1)',
    borderRadius: '25px',
    padding: '30px',
    height: "70vh",
    width: '90%',

    "& #userlist": {
      width: '100%', 
      overflowY: "hidden", 
      overflowX: "hidden", 
      paddingRight: "6px",

      "&:hover": {
        overflowY: "scroll", 
        paddingRight: 0
      }
    }
  },
  h3: {
    fontSize: '1.8rem',
    color: '#1a0f2c',
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginTop: '10px',
    marginBottom: '10px',
  },
  p: {
    color: '#dedede',
    fontSize: '1.6rem',
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginTop: '10px',
  },
  inputDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid #f0f0f0',
    borderRadius: '15px',
    margin: '40px 0',
    padding: '10px 15px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      margin: '20px 0',
    },
  },
  input: {
    height: '35px',
    border: 'none',
    borderRadius: '15px',
    outline: 'none',
    fontSize: '1.6rem',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      height: '18px',
    },
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
    border: '2px solid #82df96',
    [theme.breakpoints.down('sm')]: {
      width: '25%',
      fontSize: '1.4rem',
      padding: '12px 8px',
    },
    '&:hover': {
      background: 'white',
      color: '#82df96',
      border: '2px solid #82df96',
    },
  },
}));
