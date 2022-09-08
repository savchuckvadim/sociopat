import { Navigate, Route, Routes } from "react-router-dom"
import style from './Main.module.css';
import NavMenuContainer from "./Nav-Menu/Nav-Menu-Container";
import ProfileContainer from "./main-area/Profile/Profile-Container.tsx";
import UsersContainer from "./main-area/Users/Users-Container.ts";
import MessagesContainer from "./main-area/Messages/Messages-Container";
import Beautiful from "./main-area/Beautiful/Beautiful";


const Main = () => {

    return (

        <main id={style.main}>
            <div className={style.container}>
                <div id={style.left__area}>
                    <div id={style.left__menu}>
                        <NavMenuContainer />
                    </div>
                </div>
                <div id={style.main__area}>
                    <Routes>
                        <Route path="*" index element={<Navigate replace to={'profile'} />} />
                        {/* <Route path="login" element={<LoginContainer  />} /> */}

                        <Route path="profile" element={<ProfileContainer />}>
                            <Route path=":userId" element={<ProfileContainer />} />
                        </Route>
                        <Route path="messages//*" element={<MessagesContainer />} />
                        {/* <Route path="dialog//*" element={< />} /> */}
                        <Route path="users" element={<UsersContainer />} />
                        <Route path="beautiful" element={<Beautiful />} />


                    </Routes>
                    {/* <RouteCurrentDialogContainer/> */}
                </div>
            </div>
        </main>

    )
}

export default Main