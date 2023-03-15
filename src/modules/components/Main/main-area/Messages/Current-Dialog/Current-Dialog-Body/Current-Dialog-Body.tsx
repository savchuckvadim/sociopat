import Message from "./Message-Item/Message-Item"
import style from './Current-Dialog-Body.module.css'
import noMessage from '../../../../../../../assets/imgs/dialogs/no-messages.svg'
import { DialogType, MessageType, UserType } from "../../../../../../types/types"
import React from "react"

type PropsType = {
    dialog: DialogType
    // authUser: UserType
}

const BodyOfCurrentDialog: React.FC<PropsType> = (props) => {

    let body = null
    if (props.dialog.messages) {
        body = props.dialog.messages.map((m: MessageType) => {
            return <Message 
            // currentAuthUser={props.authUser} 
            // {...props.dialog} 
            message={m} />
        })
    } else {

        body = <img className={style.nomessages} src={noMessage} alt="no-messages-icon" />
    }

    return <div className={style.wrapper}>
        {body}
    </div>
}

export default BodyOfCurrentDialog