import './App.css';
import Main from './modules/components/Main/Main';
import HeaderContainer from './modules/components/Header/Header-Container';
import { DarkLoadingPageContainer } from './modules/components/Elements/Loading/Dark-Loading-Page-Container';
import StartPage from './modules/components/Start/Start-Page';
import LoadingPage from './modules/components/Elements/Loading/Loading-Page';
import RegistrationForm from './modules/components/Elements/Login-Form/Registartion-Form';
import BackgroundWidthLogo from './modules/components/Elements/Backgounds/Login-Background';
import { Route, Routes } from 'react-router-dom';
import Sociopath from './modules/components/Sociopath-App/Sociopath';

import AuthRedirectComponentContainer from './modules/components/HOC/Auth-Redirect';
import Registration from './modules/components/Elements/Login-Form/Registartion-Form';



// import ProfileLayoute from './modules/components/Main/main-area/Profile/Profile-Layout/Profile-Layout';
// import { DarkLoadingPageContainer } from './modules/components/Elements/Loading/Dark-Loading-Page-Container';
// import { LightLoadingPageContainer } from './modules/components/Elements/Loading/Light-Loading-Page-Container';


function App() {
 
  return (
  
    <div className="App">
        {/* <Routes>
          <Route path="*" index element={<AuthRedirectComponentContainer />} />
          <Route path='start' element={<StartPage/>}/>
        </Routes> */}
        <Sociopath />
        {/* <StartPage/> */}
     
    </div>
  
  );
}

export default App;
