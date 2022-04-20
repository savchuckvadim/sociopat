import { NavLink } from "react-router-dom";
import Icon from "../../../../Elements/Icon";
import style from './Dialog-item.module.css';
import status from '../../../../../../assets/imgs/dialogs/message-status-red.svg'

const DialogItem = (props) => {
    //id
    //lastMessage
    //NameOfDialog
    //iconOfDialog
    //user
    
    return (

        <NavLink
            to={`dialog/${props.id}`}
            // activeClassname='activeDialog'
            className={style.dialog}>
            <div className={style.icon__container}>
                <Icon user={props.user} />
            </div>

            <div className={style.lastMessage}>
                <div className={style.title}>
                    <p className={style.lastMessage__title}>{props.nameOfDialog}</p>
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

export default DialogItem;