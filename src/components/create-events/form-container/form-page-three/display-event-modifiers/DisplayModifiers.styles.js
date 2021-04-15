import { makeStyles } from '@material-ui/core/styles';

export const displayEventModifiersStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',

    "& >*": {
      flexBasis: "50%"
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: "column"
    }
  },
  h4: {
    fontWeight: '500',
    fontSize: '200%',
    marginBottom: '15px',

    [theme.breakpoints.down('sm')]: {
      textAlign: "center"
    }
  },
  modifierContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '45%',
    marginTop: '30px',



    [theme.breakpoints.down('600')]: {
      marginTop: '25px',
      width: '100%',
    },
  },
  modifier: {
    display: 'flex',
    width: '100%',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',

    "& >*": {
      [theme.breakpoints.down("sm")]: {
        flexBasis: "40%"
      }
    },

    [theme.breakpoints.down('sm')]: {
      justifyContent: "center"
    },

    '& .modifier': {
      width: '16%',
      marginLeft: '-2%',
     
      '& svg': {
        fontSize: '4rem'
      },

      '& p': {
        fontSize: '70%',
        whiteSpace: 'nowrap',
        color: 'black',
        opacity: 1
      },

      '& .modifier-icon': {
        width: '70px',
        height: '70px',
        opacity: 1,
      },

      [theme.breakpoints.down('lg')]: {
        width: '15%',


        '& .modifier-icon': {
          width: '55px',
          height: '55px'
        },

        '& svg': {
          fontSize: '3.5rem'
        },

        "& p": {
          fontSize: '50%'
        }
      },

      
      [theme.breakpoints.down('md')]: {

        '& .modifier-icon': {
          width: '45px',
          height: '45px'
        },

        '& svg': {
          fontSize: '2.5rem'
        },

      },

      [theme.breakpoints.down('sm')]: {
        width: '15%',

        '& .modifier-icon': {
          width: '80px',
          height: '80px'
        },

        '& svg': {
          fontSize: '5rem'
        },

        "& p": {
          fontSize: '125%'
        }
      }
    }
  },
}));
