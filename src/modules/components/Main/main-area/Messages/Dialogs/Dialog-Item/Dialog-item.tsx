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
}
const DialogItem: React.FC<PropsType> = (props) => {
    //id
    //lastMessage
    //NameOfDialog
    //iconOfDialog
    //user
    
    let name =  props.participant && `${props.participant.profile.name}  ${props.participant.profile.surname}`
        return (

            <NavLink
                to={`dialog/${props.id}`}
                // activeClassname='activeDialog'
                className={style.dialog}>
                <div className={style.icon__wrapper}>
                    {/* <Icon user={props.user} /> */}
                    <Avatar
                        size={68}
                        link={`../../profile/${props.userId}`}
                        user={props.participant}
                    // img={props.iconOfDialog}

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