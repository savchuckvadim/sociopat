import style from './Header.module.css';
import logo from '../../../assets/imgs/logo.svg'
import burger from '../../../assets/imgs/header/menu-burger.svg'
import Icon from '../Elements/Icon';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    let login = 'Login'
    let ava = null
  debugger
    if (props.auth.login) {
        login = props.auth.login
        
    }
    if (props.user) {
       
        ava = props.user.photos.small
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
                    <p className={style.name}>

                        <NavLink to='login' >
                            {login}
                        </NavLink>


                    </p>
                    <div className={style.icon__container}>
                        <Icon img={ava}  />
                    </div>

                </div>
            </div>


        </header>
    )
}

export default Header