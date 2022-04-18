import style from './Header.module.css';
import logo from '../../../assets/logo.svg'
import Icon from '../Elements/Icon';
const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.brand}>
                    <img className={style.logo} src={logo} alt="" />
                    <h3 className={style.sociopat}>
                        Sociopath
                    </h3>
                </div>
                <div className={style.currentUser}>
                    <p className={style.name}>
                        Current User
                    </p>
                    <Icon img={logo} />
                </div>
            </div>


        </header>
    )
}

export default Header