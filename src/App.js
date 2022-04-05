import logo from './logo.svg';
import './App.css';
import Main from './modules/components/Main/Main.jsx';
import { Route, Routes } from 'react-router-dom';
import Profile from './modules/components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Routes>
        <Route exact path="profile" component={<Profile />} />
        <Route exact path="/" component={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
