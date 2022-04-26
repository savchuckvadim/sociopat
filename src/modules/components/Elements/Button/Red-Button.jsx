import style from './Red-Button.module.css'


const RedButton = (props) => {

    return (
        <button
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

export default RedButton