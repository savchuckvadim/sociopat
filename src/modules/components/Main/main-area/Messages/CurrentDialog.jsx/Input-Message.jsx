import style from './Send-Message-Form.module.css'

const InputMessage = ({input, meta, ...props}) => {
    

    return (
        <textarea
        {...input}
        {...meta}
        // value={input.value}
        // rows={1}
        className={style.current__message}
    style={{resize:'none'}}
    placeholder={props.placeholder}
        >
        </textarea>
    )
}

export default InputMessage