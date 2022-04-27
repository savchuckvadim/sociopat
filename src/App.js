import './App.css';
import Main from './modules/components/Main/Main';
import HeaderContainer from './modules/components/Header/Header-Container';
import { DarkLoadingPageContainer } from './modules/components/Elements/Loading/Dark-Loading-Page-Container';
import StartPage from './modules/components/Start/Start-Page';
import LoadingPage from './modules/components/Elements/Loading/Loading-Page';
import RegistrationForm from './modules/components/Elements/Login-Form/Registartion-Form';
import BackgroundWidthLogo from './modules/components/Elements/Backgounds/Login-Background';



// import ProfileLayoute from './modules/components/Main/main-area/Profile/Profile-Layout/Profile-Layout';
// import { DarkLoadingPageContainer } from './modules/components/Elements/Loading/Dark-Loading-Page-Container';
// import { LightLoadingPageContainer } from './modules/components/Elements/Loading/Light-Loading-Page-Container';


function App() {
 
  return (
    <div className="App">
      {/* <HeaderContainer/>
      <Main /> */}
      {/* <DarkLoadingPageContainer /> */}
    
      <StartPage/>
    </div>
  );
}

export default App;
