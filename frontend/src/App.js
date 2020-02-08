import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Routes from './routes/routes';
import history from './services/history';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
