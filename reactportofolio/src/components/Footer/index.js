import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position:"fixed",
    bottom: 0
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction href="https://github.com/Bejarano03" label="Github" icon={<GitHubIcon />} />
      <BottomNavigationAction href="https://www.linkedin.com/in/marcobejarano/" label="LinkedIn" icon={<LinkedInIcon />} />
      <BottomNavigationAction href="https://www.facebook.com/profile.php?id=100006996857279" label="Facebook" icon={<FacebookIcon />} />
    </BottomNavigation>
  );
}
