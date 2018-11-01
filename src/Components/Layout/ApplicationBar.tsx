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

const styles = (theme: Theme) => createStyles({
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
    appBar: {
        width: `calc(100% - ${theme.appDrawer.width}px)`,
        marginLeft: theme.appDrawer.width,
	}
});

const _ApplicationBar: React.SFC<WithStyles<typeof styles>> = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" color="inherit" className={classes.grow}>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export const ApplicationBar = withStyles(styles)(_ApplicationBar);


