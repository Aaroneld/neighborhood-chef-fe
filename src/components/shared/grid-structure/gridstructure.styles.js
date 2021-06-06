import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles((theme) => {
  return {
    'grid-container': {
      display: 'grid',
      maxHeight: '100vh',
      width: '100vw',
      'grid-template-columns': '2fr 8fr',
      'grid-template-rows': '1fr 5fr',
      gap: '1px 1px',
      'grid-template-areas': ' "Logo Header" "Sidebar Variable" ',
      overflowY: 'hidden',
      overflowX: 'hidden',
      background:
        'linear-gradient(0deg, rgba(226,226,226,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%)',

      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflowY: 'hidden',
      },
    },
    Variable: {
      width: '80vw',
      gridArea: 'Variable',
      overflowX: 'hidden',
      background: 'transparent',
      overflowY: 'scroll',
          //these next two lines hide scrollbars on cards
      '&::-webkit-scrollbar': { display: 'none' },
      '-ms-overflow-style': 'none',

      [theme.breakpoints.down('md')]: {
        width: '100vw',
        overflowY: 'scroll',
      },
    },
    Header: {
      gridArea: 'Header',
      height: '16.66vh',
      

      [theme.breakpoints.down('md')]: {
        height: '10vh',
        marginBottom: '4%',
      },

      [theme.breakpoints.down('sm')]: {
        margin: '4% 0% 0% 0%',
        height: '5vh',
      },
    },
    Sidebar: {
      gridArea: 'Sidebar',
      paddingLeft: '5%',
      background: 'transparent',

      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
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
      flexWrap: 'nowrap',
      height: '16.66vh',
      maxWidth: '20vw',

      [theme.breakpoints.down('md')]: {
        width: '100vw',
        maxWidth: '100vw',
        height: '7vh',
      },

      [theme.breakpoints.down('xs')]: {
        height: '10vh',
      },
    },
  };
});
