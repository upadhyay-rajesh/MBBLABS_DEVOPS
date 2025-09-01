import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-router-dom';
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
//import { store } from './store/mystore';
import { Provider } from 'react-redux';
import StatefulRedux from './component/myfirstredux.jsx';
import ReduxStateless from './component/ReduxithStateless.jsx';
import App from './component/ReduxToolkit.jsx';
import { store } from './store1/store';
//step 2 reducer


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      

      <App />
    </Provider>
 
);