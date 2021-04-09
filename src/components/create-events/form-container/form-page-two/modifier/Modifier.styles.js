import { makeStyles } from '@material-ui/core/styles';

export const modifierStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px',
    cursor: 'pointer',
    width: '135px',
  },
  modifierNotActive: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#82df96',
    width: '50%',
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    opacity: '0.5',
  },
  modifierActive: {
    opacity: '1',
  },
  icon: {
    fontSize: '4.9rem',
    color: 'white',
  },
  p: {
    opacity: '0.3',
    paddingTop: '10px',
  },
}));
