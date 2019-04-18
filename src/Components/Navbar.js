// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// Material UI Imports
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

class Navbar extends React.Component {

  constructor() {
    this.state = {
      drawerIsOpen: false
    }
  }


  render() 
  {

    const { classes } = this.props;

    return( 
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            ScoreCFB
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer>

      </Drawer>
    </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);