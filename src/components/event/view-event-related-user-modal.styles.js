import { makeStyles } from '@material-ui/core/styles';

// @ts-ignore
export const styles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    background: 'white',
    width: '40vw',
    height: '40vw',
    zIndex: 20,
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    background: 'black',
    width: '100vw',
    height: '100vh',
    zIndex: 19,
    opacity: 0.4,
    transform: 'translate(-50%, -50%)',
  },
  avatarContainer: {
    padding: '20px',
  },
  closeBtn: {
    fontWeight: 'bold',
    padding: '20px',
    cursor: 'pointer',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  link: {
    border: 'none',
    background: 'transparent',
    overflow: 'hidden',
  },
  avatar: {
    cursor: 'pointer',
    border: '1px solid white',
    background: '#DCDCDC',
  },
}));
