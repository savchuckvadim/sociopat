import Message from "./Message-Item/Message-Item"
import style from './Current-Dialog-Body.module.css'
import noMessage from '../../../../../../../assets/imgs/dialogs/no-messages.svg'
const BodyOfCurrentDialog = (props) => {
    let body = null
    if (props.dialog.messages) {
        body = props.dialog.messages.map(m => {
            return <Message currentAuthUser={props.currentAuthUser} {...props.dialog} message={m} />
        })
    } else {

        body = <img className={style.nomessages} src={noMessage} alt="no-messages-icon" />
    }

    return <div className={style.wrapper}>
              {body}
           </div>
}

export default BodyOfCurrentDialog