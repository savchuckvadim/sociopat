import style from './Red-Button.module.css'


const RedButton = (props) => {

    return (
        <button
            className={style.button} >
            <p
                className={style.button__name}>
                {props.name}
            </p>
        </button>
    )
}

export default RedButton