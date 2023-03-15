import Avatar from '../../../../../../Elements/Avatar/Avatar'
import style from './Message-Item.module.css'
import readed from '../../../../../../../../assets/imgs/dialogs/status-readed.svg'
import { MessageType } from '../../../../../../../types/types'
import Moment from 'react-moment'

type PropsType = {
    message: MessageType
}

const Message: React.FC<PropsType> = (props) => {
    
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
                    <img src={readed} alt="message-status" />
                </div>

                <p className={style.message}>{props.message.body}</p>
            </div>
            <div className={style.date__wrapper}>
                <p className={style.date}>{<Moment fromNow >{props.message.created}</Moment>}</p>
            </div>
        </div>)
}

export default Message