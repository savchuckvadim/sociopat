import style from './CurrentDialog.module.css'


const CurrentDialog = (props) => {
    let messages = props.messages.reverse().map((message, index) => {
        if (message.send === 'to') {
            return (
                <div key={`message-wrapper-${props.id}-${index}`} className={style.wrapper__to}>
                    <div key={`message-${props.id}-${index}`} className={style.message__to}>
                        <p className={style.message_body}>{message.message_body}</p>
                    </div>
                </div>
            )
        } else if (message.send === 'from') {
            return (
                <div key={`message-wrapper-${props.id}-${index}`} className={style.wrapper__from}>
                    <div key={`message-${props.id}-${index}`} className={style.message__from}>
                    <p className={style.message_body}>{message.message_body}</p>
                    </div>
                </div>
            )
        }
    })
    debugger
    return (
        <div className={style.previous__meesages}>
            {messages}
        </div>
    )
};


export default CurrentDialog;