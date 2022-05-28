import style from './Button.module.css'
import { Field } from 'redux-form'

const Button = (props) => {
    let background = 'white'
    let color = 'black'
    if (props.color === 'grey') {
        background = '#F4F4F4'
    } else if (props.color === 'red') {
        background = 'rgba(244, 72, 72, 1)'
        color = 'white'
    }
    return (
        <button
            style={{
                borderRadius: props.border,
                backgroundColor: background,
                color:color
            }}
            type='submit'
            name={'whiteButton'}
            onClick={props.onClick}
            disabled={props.disabled}
            className={style.button} >
            <p
                className={style.button__name}>
                {props.name}
            </p>
        </button>
    )
}

export default Button