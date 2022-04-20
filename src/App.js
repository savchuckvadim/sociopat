// import logo from './logo.svg';
import './App.css';
// import Main from './modules/components/Main/Main.jsx';
// import './modules/components/Main/Main.css'
import Header from './modules/components/Header/Header';
import RegistrationForm from './modules/components/Elements/Login-Form/Registartion-Form';
import Background from './modules/components/Elements/Backgounds/Background';
import ProfileLayoute from './modules/components/Main/main-area/Profile/Profile-Information/Profile-Information';
import PostLayout from './modules/components/Main/main-area/Profile/Posts/Post';
import NavMenu from './modules/components/Main/Nav-Menu/Nav-Menu';
import { NavMenuContainer } from './modules/components/Main/Nav-Menu/Nav-Menu-Container';
import Main from './modules/components/Main/Main';
import { HeaderContainer } from './modules/components/Header/Header-Container';



// import ProfileLayoute from './modules/components/Main/main-area/Profile/Profile-Layout/Profile-Layout';
// import { DarkLoadingPageContainer } from './modules/components/Elements/Loading/Dark-Loading-Page-Container';
// import { LightLoadingPageContainer } from './modules/components/Elements/Loading/Light-Loading-Page-Container';


function App() {
 
  return (
    <div className="App">
      <HeaderContainer/>
      {/* <Background /> */}
      <Main />
      {/* <ProfileLayoute/> */}
      {/* { <LightLoadingPageContainer />} */}
      {/* <DarkLoadingPageContainer /> */}

      {/* <div className='test-container'> */}
        
        {/* <NavMenuContainer /> */}
        {/* <ProfileLayoute />, */}


        {/* <RegistrationForm /> */}
        {/* <ProfileLayoute/> */}

      {/* </div> */}
    </div>
  );
}

export default App;
