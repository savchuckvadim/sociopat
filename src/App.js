import './App.css';
import Main from './modules/components/Main/Main';
import HeaderContainer from './modules/components/Header/Header-Container';



// import ProfileLayoute from './modules/components/Main/main-area/Profile/Profile-Layout/Profile-Layout';
// import { DarkLoadingPageContainer } from './modules/components/Elements/Loading/Dark-Loading-Page-Container';
// import { LightLoadingPageContainer } from './modules/components/Elements/Loading/Light-Loading-Page-Container';


function App() {
 
  return (
    <div className="App">
      <HeaderContainer/>

      <Main />

    </div>
  );
}

export default App;
