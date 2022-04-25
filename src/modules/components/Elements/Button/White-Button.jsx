import style from './Button.module.css'


const WhiteButton = (props) => {

    return (
        <button
            onClick={props.onClick}
            className={style.button} >
            <p
                className={style.button__name}>
                {props.name}
            </p>
        </button>
    )
}

export default WhiteButton