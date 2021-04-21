import makeStyles from '@material-ui/styles/makeStyles';

export const styles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
        "& *": {
          
        },

        "& h1": {
            margin: "2% 0",
            fontSize: "150%",
            fontWeight: "lighter"
        },

        "& .avatar": {
            display: "flex",
            justifyContent: "center",
            margin: "2% 0",

            "& div": {  
                width: "250px",
                height: "250px",
                maxHeight: "30vh",
                maxWidth: "30vh",
                border: "6px solid #58D573",
                background: "white",

                "& p": {    
                    fontSize: "500%",
                    color: "#58D573",
                }
            }
        },

        "& >div": {
            width: "90%",
           
            "& nav": {
                marginTop: "2%",
                width: "100%",
                maxHeight: "40vh",
                overflowY: "scroll",

                "& a": {
                    width: "inherit",

                    "& button" : {
                        width: "inherit",
                        paddingTop: "0%",
                        paddingBottom: "0%",
                        margin: "2% 0",
                        
                        "& >span": {

                            width: "66%",
                            display: "flex",
                            justifyContent: "center",
                            
                            "& >span:first-child": {
                                fontSize: "3rem",
                                marginRight: "5%",
                                marginTop: "4%"
                            }, 

                            "& >span:last-child": {
                                fontSize: "160%",
                                alignSelf: "center",
                                whiteSpace: "nowrap",
                            }
                        },
                    }
                },

            }
        },

        "& #nav-logout": {
            width: "90%",
            fontSize: "160%",
            position: "fixed",
            bottom: "4%",
            color: "#58D573",
            opacity: .5,
            borderRadius: "10px",
            border: "4px solid #58D573",
        }
    }
}))