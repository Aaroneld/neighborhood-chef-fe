import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => {
  return {
    'grid-container': {
      display: 'grid',
      maxHeight: "100vh",
      width: "100vw",
      'grid-template-columns': '2fr 8fr',
      'grid-template-rows': '1fr 5fr',
      gap: '1px 1px',
      'grid-template-areas': ' "Logo Header" "Sidebar Variable" ',

      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: "100vh",
        overflowY: "hidden"
      },
    },
    Variable: {
      width: "80vw",
      gridArea: 'Variable',

      [theme.breakpoints.down("md")]: {
        width: "100vw",
        overflowY: "scroll"
      }
    },
    Header: {
      gridArea: 'Header',
      height: "16.66vh",

      [theme.breakpoints.down("md")]: {
        height: "10vh"
      }
    },
    Sidebar: {
      gridArea: 'Sidebar',
      paddingLeft: '5%',

      [theme.breakpoints.down('md')]: {
        paddingLeft: 0
      },

      [theme.breakpoints.down('sm')]: {
        display: 'none',
        visibility: 'none',
      },
    },
    Logo: {
      gridArea: 'Logo',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexWrap: "nowrap",
      height: "16.66vh",
      maxWidth: "20vw",

      [theme.breakpoints.down('md')]: {
        width: "100vw",
        maxWidth: "100vw",
        height: "7vh",
      }
    },
    'Drawer-Container': {
      'grid-area': '1 / 4 / 3 / 5',
      width: '25vw',
    },
    Drawer: {
      width: '25vw',
    },
    hamburgerMenu: {
      display: 'none',
      visibility: 'none',

      [theme.breakpoints.down('sm')]: {
        marginTop: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        position: 'sticky',
        bottom: '0',
        height: '10vh',
        'z-index': 2,
        background: 'white',
      },
    },
  };
});
