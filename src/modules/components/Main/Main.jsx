
import { Route, Routes } from "react-router-dom"
import Profile from "./main-area/Profile/Profile"
import { LeftItemsContainer } from "./items/itemsOfLeftMenu-Container"
import './Main.css';
import Messages from "./main-area/Messages/Messages";
import Users from "./main-area/Users/Users";
import Layout from "../Route/Layout";
import CurrentDialog from "./main-area/Messages/CurrentDialog.jsx/CurrentDialog";


const Main = () => {

    return (
        <>
            <main id="main">
                <div id="left__area">
                    <div id="left__menu">
                        <LeftItemsContainer />
                        {/* <Layout /> */}
                    </div>

                </div>
                <div id="main__area">
                    <Routes>
                       

                            <Route path="profile" element={<Profile />} />
                            <Route path="messages" element={<Messages />}>
                                <Route path=":dialog/1" element={<CurrentDialog />} />
                            </Route>
                            <Route path="/messages" element={<Messages />} />

                            {/* <Route  path="/messages/dialog/" element={<Messages />} /> */}
                            <Route exact path="/users" element={<Users />} />
                       
                    </Routes>
                </div>
            </main>
        </>
    )
}

export default Main