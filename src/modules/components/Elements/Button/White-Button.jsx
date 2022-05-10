import style from './Button.module.css'
import { Field } from 'redux-form'

const WhiteButton = (props) => {

    return (
        <Field
            component={'button'}
            name={'whiteButton'}
            onClick={props.onClick}
            disabled={props.disabled}
            className={style.button} >
            <p
                className={style.button__name}>
                {props.name}
            </p>
        </Field>
    )
}

export default WhiteButton