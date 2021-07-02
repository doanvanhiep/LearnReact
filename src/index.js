import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Product } from './component/product'
import { Counter } from './component/useReducer'
import { StoreVariale } from './component/useContext/store'
import { SomeComponent } from './component/useContext/useStore'
import { Foo } from './component/useMemo/memo'
import { UseFormikDemo } from './component/useFormik/formik'
// import TodoApp from './component/react-redux/component/TodoApp'
import TodoAppBidings from './component/react-redux/bidings/TodoAppBidings';
import { Provider } from "react-redux";
import store from "./component/react-redux/redux/store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <Product></Product> */}
      {/* <Counter></Counter> */}
      {/* <StoreVariale>
      <SomeComponent></SomeComponent>
    </StoreVariale> */}
      {/* <Foo></Foo> */}
      {/* <UseFormikDemo></UseFormikDemo> */}
      {/* <TodoApp todos={[]}></TodoApp> */}
      <TodoAppBidings></TodoAppBidings>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
