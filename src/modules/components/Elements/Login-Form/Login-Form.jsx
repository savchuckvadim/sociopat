import { Field } from "redux-form";
import { required, symbol } from "../../../utils/Validators/validator";
import RedButton from "../Button/Red-Button"
import InputEmail from "./Inputs/Input-Email/Input-Email-Container"
import { InputPasswordContainer } from "./Inputs/Input-Password/Input-Password-Container"
import style from './Registration-Form.module.css';
const symbolsValidate = symbol('@');
const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}  className={style.login}>
         <Field 
         component={InputEmail }
         validate={symbolsValidate}
         name={'email'}
         />   
        
        <InputPasswordContainer />
     
        <div className={style.button__container}>
        <RedButton  name={'НАЖАТЬ'} />
        </div>
       
    </form>
    )
}

export default LoginForm