import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: 250
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card 
            style={{
            backgroundImage: `url("https://media1.giphy.com/media/xT9GEDhzERbjDD15O8/giphy.gif?cid=ecf05e47njrt1ujjktl6ioyj3mcxtgr9baj2nion5rm94jny&rid=giphy.gif")`}} 
            className={classes.Card}><Link style={{color:"black"}} href="https://bejarano03.github.io/Weather-APP/">Weather App</Link></Card>
        </Grid>
        <Grid item xs>
          <Card 
          style={{backgroundImage: `url("https://media1.giphy.com/media/xUPGcB7dYAIBjMG2CQ/giphy.gif?cid=ecf05e4737e58gtbbab59ljjkgn4fp7a0zgsj2r7cw4wtcjc&rid=giphy.gif")`}}
          className={classes.Card}><Link style={{color: "white"}} href="#">Node</Link></Card>
        </Grid>
        <Grid item xs>
          <Card 
          style={{backgroundImage: `url("https://media1.giphy.com/media/26BkOgNzxpLQkde92/giphy.gif?cid=ecf05e47iqrk4d4vfqj34vsaiunqsq1c08v1wrkkftfpb7zc&rid=giphy.gif")`}}
          className={classes.Card}><Link style={{color:"black"}} href="https://bejarano03.github.io/User-Directory/">User Directory</Link></Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card 
          style={{backgroundImage: `url("https://media1.giphy.com/media/W4p2QJMltrvDqp1c0B/giphy.gif?cid=ecf05e47uyeaw7fdc7s7livsaoibs7nxv76t4n6o8y6ucdfv&rid=giphy.gif")`}}
          className={classes.Card}><Link style={{color:"black"}} href="https://notetaking-engine.herokuapp.com/">Note Taker</Link></Card>
        </Grid>
        <Grid item xs>
          <Card 
          style={{backgroundImage: `url("https://media1.giphy.com/media/dVuyBgq2z5gVBkFtDc/giphy.gif?cid=ecf05e47ibkjlvt7bttkp6bnej4euz96tql13xmzpa9cel5j&rid=giphy.gif")`}}
          className={classes.Card}><Link style={{color:"white"}} href="https://uwcode-group-5.github.io/State-COVID-Tracker/">Project 1</Link></Card>
        </Grid>
        <Grid item xs>
          <Card 
          style={{backgroundImage: `url("https://media0.giphy.com/media/3oz8xD60ymhwF35Xb2/giphy.gif?cid=ecf05e47asn6cl22kfp1fublzpkj4wn2ehl4f91ochwcgghu&rid=giphy.gif")`}}
          className={classes.Card}><Link style={{color:"black"}} href="https://coding-collective.herokuapp.com/">Project 3</Link></Card>
        </Grid>
      </Grid>
    </div>
  );
}
