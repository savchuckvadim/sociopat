import style from './Red-Button.module.css'
import { Field } from 'redux-form'


const RedButton = (props) => {


    return (
        <Field
            component={'button'}
            name={'redButton'}
            onClick={props.onClick}
            disabled={props.disabled}
            className={style.button}
        >
            <p
                className={style.button__name}>
                {props.name}
            </p>
        </Field>
    )
}

export default RedButton