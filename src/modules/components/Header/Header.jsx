import style from './Header.module.css';
import logo from '../../../assets/imgs/logo.svg'
import burger from '../../../assets/imgs/header/menu-burger.svg'


import LogoutContainer from './Logout-Container';
import Avatar from '../Elements/Avatar/Avatar';
const Header = (props) => {
   
    let avatar = null
    let name = null

    if (props.user) {

        avatar = props.user.photos.small
        name = props.user.name
    }
debugger
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

                    </div>

                    {/* <div className={style.avatar}> */}
                        {/* <Icon img={ava} /> */}
                         
                          <Avatar
                        size={40}
                        // img={avatar}
                        // name={name}
                        link={'profile'}
                        user={props.user}
                        />
                        
                       
                    {/* </div> */}


                </div>
            </div>


        </header>
    )
}

export default Header