import React from "react";
import {Button} from "@material-ui/core"

function Link(props){
    return(
        <Button color="inherit" ariant="contained" href="#contained-buttons">
            {props.children}
        </Button>
    )
};

export default Link;