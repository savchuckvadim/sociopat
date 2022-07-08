import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './modules/redux/store';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './App-Container.jsx';
import { Sanctum } from 'react-sanctum';
import { sanctumConfig } from './modules/services/sanctum/sunctumConfig';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <Sanctum config={sanctumConfig}> */}
        <Provider store={store}>

          <AppContainer />

        </Provider>
      {/* </Sanctum> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"))


// const root = ReactDOM.createRoot(document.getElementById("root"));


// const startApp = (store) => {
//   root.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </Provider>

//     </React.StrictMode>
//   )
// };

window.store = store
// let state = store.getState()
// startApp(store);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
