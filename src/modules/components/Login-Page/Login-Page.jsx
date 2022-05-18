import style from './Login-Page.module.css'
import LoginContainer from './Login-Registaration-Form/Login-Container'
import greyLogo from '../../../assets/imgs/grey-logo.svg'
import redLogo from '../../../assets/imgs/logo.svg'
import HeaderContainer from '../../components/Header/Header-Container';
const LoginPage = (props) => {

    return (
       
        <>
        {/* <div className={style.header}>
            <HeaderContainer />
            </div> */}
        <div className={style.page__container}>
            
            <div className={style.form__wrapper}>
                <LoginContainer />
            </div>
            <img className={style.greyLogo} src={greyLogo} alt='img-logo' />
        </div>
        </>
    )
}

export default LoginPage