import style from './Login-Page.module.scss'
import LoginContainer from './Login-Registaration-Form/Login-Container'
import HeaderContainer from '../Header/Header-Container'
import Background from '../Elements/Backgounds/Background'


const LoginPage = () => {

    return (

        <>
            <div className={style.header}>
                <HeaderContainer user={null} />
            </div>

            <div className={style.page__container}>
                <Background dark={false} />
                <div className={style.form__wrapper}>
                    <LoginContainer />
                </div>
            </div>
        </>
    )
}

export default LoginPage