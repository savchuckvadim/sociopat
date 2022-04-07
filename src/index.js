import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './modules/redux/store';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
const startApp = (store, state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App state={state} />
        </BrowserRouter>
      </Provider>

    </React.StrictMode>
  )
};
// const startApp = (store, state) => {
//   ReactDOM.render(
// ,
//     document.getElementById('root')
//   );
// }
let state = store.getState()
startApp(store, state);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
