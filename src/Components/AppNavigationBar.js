// React Imports
import React from 'react';
import PropTypes from 'prop-types';

// Material UI Toolkit Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// Styling (Pulled from Material UI Demo Component)
const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
            width: 200,
        },
        },
    },

    // Drawer styling (done manually)
    DrawerList: {
        width: '250px',
    },
});

class AppNavigationBar extends React.Component {

    // Set the inital state of the drawer
    state = { drawerIsOpen: false }

    // Handle the drawer opening
    handleDrawerOpen = () => {
        this.setState({ drawerIsOpen: true });
    }

    handleDrawerClose= () => {
        this.setState({ drawerIsOpen: false });
    }

    render()
    {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            ScoreCFB
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                            <SearchIcon />
                            </div>
                            <InputBase
                            placeholder="Search Teams"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer variant="temporary" open={this.state.drawerIsOpen} onClose={this.handleDrawerClose}>
                    <List className={classes.DrawerList}>
                        <ListItem> ScoreCFB </ListItem>
                        <ListItem> Scores </ListItem>
                        <ListItem> Charts </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }

}


AppNavigationBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNavigationBar);