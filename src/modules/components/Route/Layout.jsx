import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import style from '../Main/items/ItemOfLeftMenu.module.css';
import CurrentDialog from '../Main/main-area/Messages/CurrentDialog.jsx/CurrentDialog';
import Messages from '../Main/main-area/Messages/Messages';
import Profile from '../Main/main-area/Profile/Profile';
import Users from '../Main/main-area/Users/Users';
import '../Main/Main.css';

const Layout = () => {

    return (
        // <main id="main">
        //     <div id="left__area">
        //         <div id="left__menu">
        //             <NavLink key='profile-link' activeclassname={style.active} className={style.left__menu__item} to='profile'>Profile</NavLink>
        //             <NavLink key='messages-link' activeclassname={style.active} className={style.left__menu__item} to='messages'>Messages</NavLink>
        //             <NavLink key='users-link' activeclassname={style.active} className={style.left__menu__item} to='users'>Users</NavLink>
        //         </div>
        //     </div>
        //     <div id="main__area">
          
        //     </div>
        // </main>
        <>
            <NavLink key='profile-link' activeclassname={style.active} className={style.left__menu__item} to='profile'>Profile</NavLink>
            <NavLink key='messages-link' activeclassname={style.active} className={style.left__menu__item} to='messages'>Messages</NavLink>
            <NavLink key='users-link' activeclassname={style.active} className={style.left__menu__item} to='users'>Users</NavLink>
            </>
    )
}


export default Layout