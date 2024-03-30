import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Loader from 'components/Loader';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter basename="/nanny-services">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
