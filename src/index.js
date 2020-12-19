import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

/* BrowserRouter - обновление страниц без перезагрузки */

/* Provider - для использования context - глобальное пространсвто для store, чтобы к store получили доступ все дети, 
чтобы store не прокидывать через props */

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* <React.StrictMode> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </React.StrictMode> */}
  </BrowserRouter>,
  document.getElementById('root')
);

window.store = store;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();