import style from './Start-Page.module.css'
import redLogo from '../../../assets/imgs/logo.svg'
import inscriptionLogog from '../../../assets/imgs/logo/Sociopath.svg'
import { Navigate, NavLink } from 'react-router-dom'
import { Route, Routes } from "react-router-dom"
import LoginPage from '../Login-Page/Login-Page'
import Background from '../Elements/Backgounds/Background'
import RegistrationPage from '../Login-Page/Registration-Page'
import Button from '../Elements/Button/Button'


const Start = () => {


    return (

        <div className={style.start__page}

        >
            <Background dark={true} />
            <div className={style.wrapper} >
                <div className={style.logo__wrapper}>
                    <img className={style.redLogo} src={redLogo} alt='img-logo' />
                    <img className={style.inscriptionLogog} src={inscriptionLogog} alt='inscription-logo' />
                </div>

                <div>
                    <div className={style.slogan__wrapper}>
                        <h1 className={style.slogan__title}>Become a Sociopath.</h1>
                        <p className={style.slogan__text}> and give a shit at all</p>
                    </div>

                    <div className={style.buttons__wrapper}>

                        <div className={style.button__wrapper}>
                            <NavLink className={style.button__link} to='../login'>
                                <Button color={'red'} border={16} name={'Login'} />
                            </NavLink>
                        </div>
                        <div className={style.button__wrapper}>
                        <NavLink className={style.button__link} to='../registration'>
                                <Button color={'white'} border={16} name={'registaration'} />
                            </NavLink>
                            {/* <WhiteButton
                                onClick={() => {
                                    requestToken()
                                    getUsers()
                                    return <Navigate redirect to='/' />
                                }}
                                name={'Sign up'}
                                border={16}
                            /> */}
                        </div>
                    </div>

                </div>
                <div>
                    <p>© 2022 Sociopath. All rights reserved</p>
                </div>


            </div>


            {/* <img className={style.greyLogo} src={redLogo} alt='img-logo' /> */}

        </div>


    )
}
const StartPage = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="*" index element={<Start />} />
                <Route path="start" element={<Start />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="registration" element={<RegistrationPage />} />
                <Route path="profile" element={<Navigate replace to='../' />} />
            </Routes>

        </>

    )
}

export default StartPage