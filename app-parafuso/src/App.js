import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global'
import * as themes from './styles/themes';
import history from './services/history';
import './config/ReactotronConfig';
import { store, persistor } from './store';
import Routes from './routes';


class App extends Component {
  state = {
    theme: themes.dark,
  };

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === themes.dark ? themes.light : themes.dark })
  };
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Router history={history}>
              <Routes />
            </Router>
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
