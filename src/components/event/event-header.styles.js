import makeStyles from '@material-ui/styles/makeStyles';


export const styles = makeStyles(theme => ({
    container: {
        position: "absolute",
        top: "2.5%",
        left: "50%",     
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        "& h2": {
            fontSize: "250%",
            fontWeight: 500,

            [theme.breakpoints.down('lg')]: {
                fontSize: "200%"
            },

            [theme.breakpoints.down('md')]: {
                fontSize: "150%"
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: "110%"
            }
        },

        "& p": {
            [theme.breakpoints.down('lg')]: {
                fontSize: "100%"
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: "80%"
            }
        },

        "& span": {
            opacity: .7
        },

        "& a": {
            textDecoration: "underline",

            [theme.breakpoints.down('lg')]: {
                fontSize: "70%"
            },

            [theme.breakpoints.down('sm')]: {
                fontSize: "80%"
            }
        },

        [theme.breakpoints.down("md")]: {
            top: "17%",
            transform: "translateX(-45%)",
        },

        [theme.breakpoints.down("sm")]: {
            top: "10%",
        }
    }
}));
