import style from './Header.module.css';
import logo from '../../../assets/imgs/logo.svg'
import burger from '../../../assets/imgs/header/menu-burger.svg'
import Icon from '../Elements/Icon';
import { NavLink } from 'react-router-dom';

import LogoutContainer from './Logout-Container';
import Avatar from '../Elements/Avatar/Avatar';
const Header = (props) => {
    let login = 'Login'
    let avatar = null
    let name = null
    // const logout = <NavLink to='../'>logout</NavLink>
    if (props.auth.login) {
        login = props.auth.login

    }
    if (props.user.userId) {

        avatar = props.user.photos.small
        name = props.user.fullName
    }

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.menu}>
                    <img src={burger} alt="menu-burger" />
                </div>
                <div className={style.brand}>
                    <img className={style.logo} src={logo} alt="" />
                    <h3 className={style.sociopat}>
                        Sociopath.
                    </h3>
                </div>
                <div className={style.currentUser}>
                    <div className={style.name}>
                        <LogoutContainer />
                        {/* <NavLink to='profile' >
                            {login}
                        </NavLink> */}

                    </div>

                    <div className={style.icon__container}>
                        {/* <Icon img={ava} /> */}
                         
                          <Avatar
                        size={40}
                        img={avatar}
                        name={name}
                        link={'profile'}
                        />
                        
                       
                    </div>


                </div>
            </div>


        </header>
    )
}

export default Header