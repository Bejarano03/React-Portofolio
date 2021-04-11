import React from "react";
import { InlineWidget} from "react-calendly";

function ContactMe(){
    return(
        <div className="App">
      <InlineWidget url="https://calendly.com/marco-bejarano/30min" />
    </div>
    )
};

export default ContactMe;