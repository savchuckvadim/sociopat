import { Route, Routes } from "react-router-dom"
import style from './Main.module.css';
import Messages from "./main-area/Messages/Messages";
import { NavMenuContainer } from "./Nav-Menu/Nav-Menu-Container";
import ProfileContainer from "./main-area/Profile/Profile-Container";
import UsersContainer from "./main-area/Users/Users-Container";
import Registration from "../Elements/Login-Form/Registartion-Form";
import LoginContainer from "../Elements/Login-Registaration-Form/Login-Container";


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
                        <Route path="login" element={<LoginContainer  />} />
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