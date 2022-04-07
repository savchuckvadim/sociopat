
import { Route, Routes } from "react-router-dom"
import Profile from "./main-area/Profile/Profile"
import { LeftItemsContainer } from "./items/itemsOfLeftMenu-Container"
import './Main.css'
import Messages from "./main-area/Messages/Messages"
import Users from "./main-area/Users/Users"
const Main = () => {

    return (
        <>
            <main id="main">
                <div id="left__area">
                    <div id="left__menu">
                        <LeftItemsContainer />
                    </div>

                </div>
                <div id="main__area">
                    <Routes>
                        <Route exact path="/" element={<Profile />} />
                        <Route exact path="/profile" element={<Profile />} />
                        <Route  path="/messages/" element={<Messages />} />
                        {/* <Route  path="/messages/dialog/" element={<Messages />} /> */}
                        <Route exact path="/users" element={<Users />} />
                    </Routes>
                </div>
            </main>
        </>
    )
}

export default Main