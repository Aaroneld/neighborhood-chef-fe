import { makeStyles } from '@material-ui/core/styles';

export const displayEventModifiersStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',

    "& >*": {
      flexBasis: "50%"
    },
  },
  h4: {
    fontWeight: '500',
    fontSize: '200%',
    marginBottom: '15px',
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
      }
    }
  },
}));
