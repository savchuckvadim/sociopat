
import { Route, Routes } from "react-router-dom"
import Profile from "./main-area/Profile/Profile"
import { LeftItemsContainer } from "./items/itemsOfLeftMenu-Container"
import style from './Main.module.css';
import Messages from "./main-area/Messages/Messages";
import Users from "./main-area/Users/Users";
import { NavMenuContainer } from "./Nav-Menu/Nav-Menu-Container";
import CurrentDialog from "./main-area/Messages/CurrentDialog.jsx/CurrentDialog";
import { RouteCurrentDialogContainer } from "./main-area/Messages/CurrentDialog.jsx/Route-Current-Dialog-Container";
import ProfileContainer from "./main-area/Profile/Profile-Container";
import UsersContainer from "./main-area/Users/Users-Container";
import RegistrationForm from "../Elements/Login-Form/Registartion-Form";


const Main = () => {
    
    return (

        <main id={style.main}>
            <div className={style.container}>
                <div id={style.left__area}>
                    <div id={style.left__menu}>
                        {/* <LeftItemsContainer /> */}
                        <NavMenuContainer />
                    </div>
                </div>
                <div id={style.main__area}>
                    <Routes>
                        <Route path="/" index element={<ProfileContainer />} />
                        <Route path="login" element={<RegistrationForm/>}/>
                        <Route path="profile" element={<ProfileContainer />} />
                        <Route path="messages//*" element={<Messages />} />
                        {/* <Route path="dialog//*" element={< />} /> */}
                        <Route path="users" element={<UsersContainer />} />
                        <Route path="/profile/:userId" element={<ProfileContainer />} />
                    </Routes>
                    {/* <RouteCurrentDialogContainer/> */}
                </div>
            </div>
        </main>

    )
}

export default Main