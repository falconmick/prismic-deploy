import createMuiTheme, { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';

export const createMyTheme = (options: ThemeOptions) => {
    return createMuiTheme({
        appDrawer: {
            width: 225,
            breakpoint: 'lg',
        },
        ...options,
    })
};
