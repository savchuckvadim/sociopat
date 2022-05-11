import RedButton from "../Button/Red-Button"
import { InputEmailContainer } from "./Inputs/Input-Email/Input-Email-Container"
import { InputPasswordContainer } from "./Inputs/Input-Password/Input-Password-Container"
import style from './Registration-Form.module.css';

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}  className={style.login}>
            
        <InputEmailContainer />
        <InputPasswordContainer />
     
        <div className={style.button__container}>
        <RedButton  name={'НАЖАТЬ'} />
        </div>
       
    </form>
    )
}

export default LoginForm