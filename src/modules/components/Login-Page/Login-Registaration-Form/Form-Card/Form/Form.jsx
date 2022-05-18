import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { symbol } from '../../../../../utils/Validators/validator'
import RedButton from '../../../../Elements/Button/Red-Button'
import InputEmail from './Inputs/Input-Email/Input-Email'
import InputName from './Inputs/Input-Name/Input-Name'
import InputPassword from './Inputs/Input-Password/Input-Password'
import InputRepeatPass from './Inputs/Input-Repeat-Password/Input-RepeatPass'
import InputSurname from './Inputs/Input-Surame/Input-Surname'
import style from './Form.module.css'
import { Navigate, NavLink } from 'react-router-dom'
const symbolsValidate = symbol('@');



let Form = (props) => {
    if (props.error) {
        props.setError(props.error)
    }

    let components = [
        [
            InputEmail, InputPassword
        ],
        [
            InputName, InputSurname, InputEmail, InputPassword, InputRepeatPass
        ]

    ]
    let inputs = []

    let typeIndex = 0
    props.type === 'login'
        ? typeIndex = 0
        : typeIndex = 1



    inputs = props.fields.map((field, index) =>
        <Field
            component={components[typeIndex][index]}
            // validate={symbolsValidate}
            name={field.name}
            placeholder={field.placeholder}
            key={field.name}
        />)

    return (<>
        
        <form onSubmit={props.handleSubmit} className={style.inputs__container}>

            {inputs}
            <div className={style.button__container}>
            <NavLink className={style.button__container} to={'../profile'}> 
            <RedButton name={'НАЖАТЬ'}/>  
             </NavLink>
            </div>

        </form>
    </>

    )
}

export default Form = reduxForm({ form: 'login' })(Form)