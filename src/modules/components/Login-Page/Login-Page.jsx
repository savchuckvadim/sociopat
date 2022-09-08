import style from './Login-Page.module.css'
import LoginContainer from './Login-Registaration-Form/Login-Container'
import RegistrationContainer from './Login-Registaration-Form/Registration-Container'
import greyLogo from '../../../assets/imgs/grey-logo.svg'
import redLogo from '../../../assets/imgs/logo.svg'
import HeaderContainer from '../../components/Header/Header-Container'
import Background from '../Elements/Backgounds/Background'
const LoginPage = (props) => {

    return (
       
        <>
        {/* <div className={style.header}>
            <HeaderContainer />
           </div> */}
           
        <div className={style.page__container}>
        <Background dark={false}/>
            <div className={style.form__wrapper}>
                <LoginContainer />
                {/* <RegistrationContainer /> */}
            </div>
            {/* <img className={style.greyLogo} src={greyLogo} alt='img-logo' /> */}
        </div>
        </>
    )
}

export default LoginPage