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
    padding: '10px',
  },
}));
