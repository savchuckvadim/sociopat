
import { Route, Routes } from "react-router-dom"
import Profile from "./main-area/Profile/Profile"
import { LeftItemsContainer } from "./items/itemsOfLeftMenu-Container"
import './Main.css';
import Messages from "./main-area/Messages/Messages";
import Users from "./main-area/Users/Users";
import { NavMenuContainer } from "./Nav-Menu/Nav-Menu-Container";
import ProfileLayoute from "./main-area/Profile/Profile-Layout/Profile-Layout";


const Main = () => {

    return (

        <main id="main">
            <div id="left__area">
                <div id="left__menu">
                    {/* <LeftItemsContainer /> */}
                    <NavMenuContainer/>
                </div>
            </div>
            <div id="main__area">
                <Routes>
                    <Route path="/" index element={<ProfileLayoute />} />
                    <Route path="profile" element={<ProfileLayoute />} />
                    <Route path="messages//*" element={<Messages />} />
                    <Route exact path="users" element={<Users />} />
                </Routes>
            </div>
        </main>

    )
}

export default Main