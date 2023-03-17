import Avatar from '../../../../../../Elements/Avatar/Avatar'
import style from './Message-Item.module.css'
import readed from '../../../../../../../../assets/imgs/dialogs/status-readed.svg'
import { MessageType } from '../../../../../../../types/types'
import Moment from 'react-moment'

type PropsType = {
    message: MessageType
    isNotification?: boolean
}

const Message: React.FC<PropsType> = (props) => {
    debugger
    let nameOfDialog = `${props.message.author.profile.name} ${props.message.author.profile.surname}`


    return (
        <div key={`${props.message.id}`} className={style.wrapper}>
            <div className={style.avatar}>
                <Avatar
                    size={48}
                    user={props.message.author}
                />
            </div>

            <div className={style.text__wrapper}>
                <div className={style.nameAndStatus__wrapper}>
                    <p className={style.author}>{nameOfDialog}</p>
                    {!props.isNotification  &&  <img src={readed} alt="message-status" />}
                </div>

                <p className={props.isNotification 
                    ? style.notification 
                    : style.message }>{props.message.body}</p>
            </div>
            <div className={style.date__wrapper}>
                <p className={style.date}>{<Moment format="hh:mm"  >{props.message.created}</Moment>}</p>
            </div>
        </div>)
}

export default Message