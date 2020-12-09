import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Product} from './component/product'
import {Counter} from './component/useReducer'
import {StoreVariale} from './component/useContext/store'
import {SomeComponent} from './component/useContext/useStore'


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Product></Product> */}
    {/* <Counter></Counter> */}
    <StoreVariale>
      <SomeComponent></SomeComponent>
    </StoreVariale>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
