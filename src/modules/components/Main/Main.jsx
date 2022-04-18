
import { Route, Routes } from "react-router-dom"
import Profile from "./main-area/Profile/Profile"
import { LeftItemsContainer } from "./items/itemsOfLeftMenu-Container"
import style from './Main.module.css';
import Messages from "./main-area/Messages/Messages";
import Users from "./main-area/Users/Users";
import { NavMenuContainer } from "./Nav-Menu/Nav-Menu-Container";
import ProfileLayoute from "./main-area/Profile/Profile-Layout/Profile-Layout";


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
                        <Route path="/" index element={<ProfileLayoute />} />
                        <Route path="profile" element={<ProfileLayoute />} />
                        <Route path="messages//*" element={<Messages />} />
                        <Route exact path="users" element={<Users />} />
                    </Routes>
                </div>
            </div>
        </main>

    )
}

export default Main