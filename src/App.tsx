import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApplicationBar } from './Components/Layout/ApplicationBar';
import { ApplicationDrawer } from './Components/Layout/ApplicationDrawer';
import { createMyTheme } from "./styles/createMyTheme";


const theme = createMyTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
    typography: {
        useNextVariants: true,
    },
});

class App extends Component {
  render() {
    return (
      <div className="App">
          <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <ApplicationBar />
              <ApplicationDrawer />
          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
