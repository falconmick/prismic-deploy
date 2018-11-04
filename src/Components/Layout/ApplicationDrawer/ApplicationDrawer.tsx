import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Hidden from '@material-ui/core/Hidden';
import Drawer from "@material-ui/core/Drawer/Drawer";
import {DrawerContents} from "./DrawerContents";

const styles = (theme: Theme) => {
    const drawerWidth = theme.appDrawer.width;
    return createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width: drawerWidth,
        },
    });
};

interface ApplicationDrawerProps extends WithStyles<typeof styles> {
    handleDrawerToggle: () => void;
    mobileOpen: boolean;
    theme: Theme;
}

const _ApplicationDrawer: React.SFC<ApplicationDrawerProps> = (props) => {
    const { classes, theme, mobileOpen, handleDrawerToggle } = props;

    return (
        <nav className={classes.drawer}>
            {/* The implementation can be swap with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <DrawerContents />
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <DrawerContents />
                </Drawer>
            </Hidden>
        </nav>
    );
};

export const ApplicationDrawer = withStyles(styles, { withTheme: true })(_ApplicationDrawer);


