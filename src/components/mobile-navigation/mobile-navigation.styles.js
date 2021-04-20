import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
        "& >*": {
            flexBasis: "90%"
        }
    }
}))