// import logo from './logo.svg';
import './App.css';
// import Main from './modules/components/Main/Main.jsx';
// import './modules/components/Main/Main.css'
import Header from './modules/components/Header/Header';
import RegistrationForm from './modules/components/Elements/Login-Form/Registartion-Form';
import Background from './modules/components/Elements/Backgound/Background';
import ProfileLayoute from './modules/components/Main/main-area/Profile/Profile-Layout/Profile-Layout';
import PostLayout from './modules/components/Elements/Posts/Post-Layout';
import NavMenu from './modules/components/Main/Nav-Menu/Nav-Menu';
import { NavMenuContainer } from './modules/components/Main/Nav-Menu/Nav-Menu-Container';
import Main from './modules/components/Main/Main';



// import ProfileLayoute from './modules/components/Main/main-area/Profile/Profile-Layout/Profile-Layout';
// import { DarkLoadingPageContainer } from './modules/components/Elements/Loading/Dark-Loading-Page-Container';
// import { LightLoadingPageContainer } from './modules/components/Elements/Loading/Light-Loading-Page-Container';


function App() {
  let img = 'https://images.unsplash.com/photo-1557093793-e196ae071479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  let img1 = 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  let img2 = 'https://images.unsplash.com/photo-1531778272849-d1dd22444c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=460&q=80'
  return (
    <div className="App">
      <Header />
      <Background />
      <Main />
      {/* <ProfileLayoute/> */}
      {/* { <LightLoadingPageContainer />} */}
      {/* <DarkLoadingPageContainer /> */}

      <div className='test-container'>
        
        {/* <NavMenuContainer /> */}
        {/* <ProfileLayoute />, */}
        {/* <PostLayout postsImg={img} />
        <PostLayout postsImg={img1} />
        <PostLayout postsImg={img2} /> */}

        {/* <RegistrationForm /> */}
        {/* <ProfileLayoute/> */}

      </div>
    </div>
  );
}

export default App;
