import style from './Background.module.css';
import logo from '../../../../assets/grey-logo.svg';

const Background = () => {

    return (
        <div className={style.background}>
            <img src={logo} alt="logo" className={style.logo}/>
          
        </div>
    )
}

export default Background