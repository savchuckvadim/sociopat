import style from './Login-Page.module.css'
import LoginContainer from './Login-Registaration-Form/Login-Container'

const LoginPage = (props) => {

    return (
        <div className={style.page}>
            <div className={style.form__wrapper}>
                <LoginContainer />
            </div>
        </div>
    )
}

export default LoginPage