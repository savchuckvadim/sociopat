import { NavLink } from 'react-router-dom';
import RedButton from '../Button/Red-Button';
import { InputEmailContainer } from './Inputs/Input-Email/Input-Email-Container';
import { InputNameContainer } from './Inputs/Input-Name/Input-Name-Container';
import { InputPasswordContainer } from './Inputs/Input-Password/Input-Password-Container';
import { InputRepeatPassContainer } from './Inputs/Input-Repeat-Password/Input-RepeatPass-Container';
import { InputSurnameContainer } from './Inputs/Input-Surame/Input-Surname-Container';
import style from './Registration-Form.module.css';
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import LoginForm from './Login-Form';
const Registration = () => {
  
    const submit  = (values) => {
        // print the form values to the console
        console.log(values)
        console.log('values')
      }
     
    return (
        <div className={style.registration}>
            <div className={style.form__title}>
                <h1>
                    Getting started
                </h1>
                <p>Create an account to continue and connect with the Sociopaths.</p>
            </div>

            <div className={style.form__container}>
                {/* <RegistartionReduxForm onSubmit={submit}/> */}
                <LoginReduxForm onSubmit={submit}/>
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

const RegistartionForm = (props) => {
    
    
    return (
        <form onSubmit={props.handleSubmit}  className={style.inputs__container}>
            {/* <Field component={'input'} name='test-input'/> */}
        <InputNameContainer />
        <InputSurnameContainer />
        <InputEmailContainer />
        <InputPasswordContainer />
        <InputRepeatPassContainer />
        <div className={style.button__container}>
        <RedButton  name={'НАЖАТЬ'} />
        </div>
       
    </form>
    )
}

const RegistartionReduxForm = reduxForm ({form: 'registaration' })(RegistartionForm)
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export default Registration