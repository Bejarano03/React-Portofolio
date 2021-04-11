import { Container, Typography } from "@material-ui/core";
import React from "react";
import AutoGrid from "../components/Grid";
import Logo from "../assets/self.jpeg";


function Portofolio() {
  return (
    <div>
      
      <Container style={{display: "flex", margin: 10}}>
      <img src={Logo} alt="website logo" style={{ height: 200, width: 300, margin: 5, borderRadius: 25 }} />
      <Typography style={{flexWrap: "wrap"}}>
      Welcome to my website, I hope that you enjoy my work and I'd highly appreciate any feedback.
      I have completed my bootcamp at this moment and am now looking forward to my 100 day challenge of pure coding.
      During my bootcamp I was able to learn a lot and I had exposure to over twenty technologies, and even though it was very challeging, I'm happy to share that I can now offically called my self a Full Stack Developer.
      </Typography>
      </Container>


      <Container style={{margin: 20}}>
      <AutoGrid></AutoGrid>
      </Container>
      
    </div>
  );
}

export default Portofolio;
