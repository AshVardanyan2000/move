import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './assets/styles/styles.scss';
import { router } from './router';
import store from './store';



const reactRoot = document.querySelector('#root');

const root = ReactDOM.createRoot(reactRoot);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
