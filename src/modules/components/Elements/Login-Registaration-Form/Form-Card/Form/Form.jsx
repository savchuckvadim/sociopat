import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { symbol } from '../../../../../utils/Validators/validator'
import RedButton from '../../../Button/Red-Button'
import InputEmail from '../../../Login-Form/Inputs/Input-Email/Input-Email'
import InputName from '../../../Login-Form/Inputs/Input-Name/Input-Name'
import InputPassword from '../../../Login-Form/Inputs/Input-Password/Input-Password'
import InputRepeatPass from '../../../Login-Form/Inputs/Input-Repeat-Password/Input-RepeatPass'
import InputSurname from '../../../Login-Form/Inputs/Input-Surame/Input-Surname'
import style from './Form.module.css'
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
                <RedButton name={'НАЖАТЬ'} />
            </div>

        </form>
    </>

    )
}

export default Form = reduxForm({ form: 'login' })(Form)