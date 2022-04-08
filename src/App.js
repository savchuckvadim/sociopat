import logo from './logo.svg';
import './App.css';
import Main from './modules/components/Main/Main.jsx';
import './modules/components/Main/Main.css'
import Header from './modules/components/Header/Header';
import Layout from './modules/components/Route/Layout';
import Messages from './modules/components/Main/main-area/Messages/Messages';
import { Route, Routes } from 'react-router-dom';
import Users from './modules/components/Main/main-area/Users/Users';
import Profile from './modules/components/Main/main-area/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      

    </div>
  );
}

export default App;
