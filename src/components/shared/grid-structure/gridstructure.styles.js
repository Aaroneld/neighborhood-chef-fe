import makeStyles  from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => {
    console.log(theme)
    return {
      'grid-container': {
        display: 'grid',
        'grid-template-columns': '2fr 8fr',
        'grid-template-rows': '1fr 9fr',
        gap: '1px 1px',
        'grid-template-areas': ' "Logo Header" "Sidebar Variable" ',
        // height: '100vh',
  
        [theme.breakpoints.down('769')]: {
          // height: '100%',
          // minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      },
      Variable: {
        gridArea: 'Variable',
      },
      Header: {
        gridArea: 'Header',
        height: '10vh',
  
        [theme.breakpoints.down('769')]: {
          marginLeft: '12%',
        },

      },
      Sidebar: {
        gridArea: 'Sidebar',
        paddingLeft: '5%',
  
        [theme.breakpoints.down('414')]: {
          display: 'none',
          visibility: 'none',
        },
      },
      Logo: {
        gridArea: 'Logo',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
  
        '& *': {
          width: '100%',
  
          '&:first-child': {
            width: '20%',
          },
  
          '&:last-child': {
            width: '115%',
          },
        },
  
        [theme.breakpoints.down('769')]: {
          '&  a > div:first-child': {
            marginLeft: '29%',
            paddingTop: '3%',
          },
        },
  
        [theme.breakpoints.down('414')]: {
          '&  a > div:first-child': {
            marginLeft: '18%',
          },
        },
  
        [theme.breakpoints.down('414')]: {
          '&  a > div:first-child': {
            margin: "2% 5%",
            paddingTop: '3%',
          },
        },
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
  
        [theme.breakpoints.down('960')]: {
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