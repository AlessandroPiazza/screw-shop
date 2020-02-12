import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global'
import ThemeSwitcher from './components/ThemeSwitcher'
import * as themes from './styles/themes';
import history from './services/history';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import Routes from './routes';
import ThemeContext from './styles/themes/context';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    theme: themes.dark,
  };

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === themes.dark ? themes.light: themes.dark})
  };
render(){
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeContext.Provider value={this.state}>
          <ThemeContext.Consumer>
            {theme =>(
              <ThemeProvider theme={theme}>
                <Router history={history}>
                <ThemeSwitcher toggleTheme={this.toggleTheme}/>
                  <Routes />
                </Router>
                <GlobalStyle />
                <ToastContainer autoClose={3000}/>
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
          </ThemeContext.Provider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
      
  );
}
}

export default App;
