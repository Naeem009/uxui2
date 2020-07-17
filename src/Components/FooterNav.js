import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0

  },
});

export default function FootNav({screenConfig}) {
  const classes = useStyles();
  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Status" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country Status" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Pakistan" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
