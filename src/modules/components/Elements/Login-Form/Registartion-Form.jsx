import { NavLink } from 'react-router-dom';
import { InputEmailContainer } from './Inputs/Input-Email/Input-Email-Container';
import { InputNameContainer } from './Inputs/Input-Name/Input-Name-Container';
import { InputPasswordContainer } from './Inputs/Input-Password/Input-Password-Container';
import { InputRepeatPassContainer } from './Inputs/Input-Repeat-Password/Input-RepeatPass-Container';
import { InputSurnameContainer } from './Inputs/Input-Surame/Input-Surname-Container';
import style from './Registration-Form.module.css';

const RegistrationForm = () => {

    return (
        <div className={style.registration}>
            <div className={style.form__title}>
                <h1>
                    Getting started
                </h1>
                <p>Create an account to continue and connect with the Sociopaths.</p>
            </div>

            <div className={style.form__container}>
                <div className={style.inputs__container}>
                    <InputNameContainer />
                    <InputSurnameContainer />
                    <InputEmailContainer />
                    <InputPasswordContainer />
                    <InputRepeatPassContainer />
                    <InputRepeatPassContainer />
                </div>
                <div className={style.form__footer}>
                    <div className={style.description}>
                        By pressing Sign Up, you agree to the Terms of Service and Privacy Policy.
                    </div>
                    <div className={style.line}>
                        <hr ></hr>
                    </div>
                    <div className={style.link__container}>
                        Already have an account? <NavLink className={style.link} to={`profile`} activeclassname='active'>Sign In</NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RegistrationForm