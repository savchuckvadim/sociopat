import style from './Login-Background.module.css';
import logo from '../../../../assets/imgs/grey-logo.svg';

const BackgroundWidthLogo = () => {

    return (
        <div className={style.background}>
            <img src={logo} alt="logo" className={style.logo}/>
          
        </div>
    )
}

export default BackgroundWidthLogo