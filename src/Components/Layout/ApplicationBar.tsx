import React from 'react';
import PropTypes from 'prop-types';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme: Theme) => {
	const drawerWidth = theme.appDrawer.width;
	return createStyles({
        appBar: {
            marginLeft: drawerWidth,
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
            },
        },
        menuButton: {
            marginRight: 20,
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
    });
};

interface ApplicationBarProps extends WithStyles<typeof styles> {
    handleDrawerToggle: () => void;
}

const _ApplicationBar: React.SFC<ApplicationBarProps> = (props) => {
	const { classes, handleDrawerToggle } = props;
	return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    Responsive drawer
                </Typography>
            </Toolbar>
        </AppBar>
	);
};

export const ApplicationBar = withStyles(styles)(_ApplicationBar);


