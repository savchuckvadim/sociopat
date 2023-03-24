import { NavLink } from "react-router-dom"
import Avatar from "../../../../../Elements/Avatar/Avatar"
import style from './Dialog-item.module.css'
import status from '../../../../../../../assets/imgs/dialogs/message-status-red.svg'
import { UserType } from "../../../../../../types/types"

type PropsType = {
    id: number
    lastMessage: string | false
    userId: number
    participant: UserType
    online: Array<number>
}

const DialogItem: React.FC<PropsType> = (props) => {

    const isActive = props.online.some(userId => userId === props.participant.id)
    let name = props.participant && `${props.participant.profile.name}  ${props.participant.profile.surname}`
    return (

        <NavLink
            to={`dialog/${props.id}`}

            className={style.dialog}>
            <div className={style.icon__wrapper}>

                <Avatar
                    size={68}
                    link={`../../profile/${props.userId}`}
                    user={props.participant}
                    isActive={isActive}
                />
            </div>

            <div className={style.lastMessage}>
                <div className={style.title}>
                    <p className={style.lastMessage__title}>{name}</p>
                    <div className={style.status}>
                        <img src={status} alt="status-icon" />
                    </div>
                </div>

                <p className={style.lastMessage__text}>{props.lastMessage}</p>
            </div>
            <div className={style.date__container}>
                <p className={style.date} >16:20</p>
            </div>

        </NavLink>

    )



}

export default DialogItem