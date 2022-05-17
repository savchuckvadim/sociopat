import style from './Login-Page.module.css'
import LoginContainer from './Login-Registaration-Form/Login-Container'
import greyLogo from '../../../assets/imgs/grey-logo.svg'
import redLogo from '../../../assets/imgs/logo.svg'
const LoginPage = (props) => {

    return (
        <div className={style.page}>
            <div className={style.form__wrapper}>
                <LoginContainer />
            </div>
            <img className={style.greyLogo} src={redLogo} alt='img-logo' />
        </div>
    )
}

export default LoginPage