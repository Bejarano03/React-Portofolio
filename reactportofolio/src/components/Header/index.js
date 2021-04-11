import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from "../HomeIcon";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <HomeIcon style={{margin:15}} onClick={event => window.location.href="/"} />
          <Typography variant="h6" className={classes.title}>
            Marco Bejarano Oseguera
          </Typography>
          <Button color="inherit" href="/about">About Me</Button>
          <Button color="inherit" href="/contact">Contact Me</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
