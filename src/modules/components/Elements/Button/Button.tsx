import style from './Button.module.css'
import { Field } from 'redux-form'
export type ColorType = 'white' | 'red' | 'grey'
export type DisabledType = boolean

type ButtonType = {
    color: ColorType
    border: 12 | 16 | 18
    name: string
    disabled: boolean
    onClick: (() => void) | undefined
}
export enum ButtonColorsEnum {
    red = 'red',
    grey = 'grey',
    white = 'white'
}
const Button: React.FC<ButtonType> = (props) => {
    let background = 'white'
    let color = 'black'
    if (props.color === ButtonColorsEnum.grey) {
        background = '#F4F4F4'
    } else if (props.color === ButtonColorsEnum.red) {
        background = 'rgba(244, 72, 72, 1)'
        color = 'white'
    }
    return (
        <button
            style={{
                borderRadius: props.border,
                backgroundColor: background,
                color: color
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