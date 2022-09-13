import style from './Button.module.css'
import { Field } from 'redux-form'

type WhiteButtonType = {
    grey: string | undefined //TODO: white|red|grey
    border: number //TODO: 12|16|18
    name: string
    disabled: boolean |undefined
    onClick: () => void
}
const WhiteButton: React.FC<WhiteButtonType> = (props) => {
    let background = 'white'
    if (props.grey) {
        background = '#F4F4F4'
    }
    return (
        <button
            style={{
                borderRadius: props.border,
                backgroundColor: background
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

export default WhiteButton