import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { emailValidate, passwordValidate, requiredFields } from '../../../../../utils/Validators/validator'
import style from './Form.module.css'
import Input from './Inputs/Input-Login-Registartion'
import Button from '../../../../Elements/Button/Button'
import { LoginFieldsType, RegistrationFieldsType, SetErrorType } from '../../../../../redux/reducers/login-registaration/login-registration-reducer'
import { FormCardPropsType } from '../Form-Card'
// type FieldsValuesType = {
//     name:string, surname:string, email:string, password:string, repeatPassword:string
// }
// type onSubmitType =((email:string, password:string)=>void) | ((name:string, surname:string, email:string, password:string, repeatPassword:string)=>void)
type FieldsType = LoginFieldsType | RegistrationFieldsType
// type FormType = {
//     onSubmit:  onSubmitType
//     setError:(error: string) => SetErrorType
//     type: string
//     fields: FieldsType
// }

let Form: React.FC<InjectedFormProps<FieldsType, FormCardPropsType> & FormCardPropsType> = (props) => {
    if (props.error) {
        props.setError(props.error)
    }


    let inputs = []

    // let typeIndex = 0
    // props.type === 'login'
    //     ? typeIndex = 0
    //     : typeIndex = 1

        let validate = null

    inputs = props.fields.map(field => {

        if(field.name === 'email'){
            validate = emailValidate
        }else if(field.name === 'password'){
            validate = passwordValidate
        }else {
            validate = requiredFields
        }
      
        return <Field
            component={Input}
            validate={[validate]}
            name={field.name}
            type={field.name}
            placeholder={field.placeholder}
            key={field.name}
        />
    }
    )

    return (<>

        <form onSubmit={props.handleSubmit} className={style.inputs__container}>
{/* handleSubmit, error, captchaSubmit ? */}
            {inputs}
            <div className={style.button__container}>
                {/* <NavLink className={style.button__container} to={'../'}>  */}
                <Button disabled={false} onClick={undefined} color={'red'} border={16} name={'НАЖАТЬ'} />
                {/* </NavLink> */}
            </div>

        </form>
    </>

    )
}

export default  reduxForm<FieldsType, FormCardPropsType>({
    form: 'login'
})(Form)