import { NavLink } from "react-router-dom"
import Icon from "../../../../Elements/Icon";


import style from './Dialog-item.module.css';


const DialogItem = (props) => {
    //id
    //lastMessage
    //NameOfDialog
    //iconOfDialog

    return (

        <NavLink to={`dialog/${props.id}`} activeclassname='active' className={style.dialog}>
            <Icon img={props.iconOfDialog} />
            <div className={style.lastMessage}>
                <p className={style.lastMessage__title}>{props.nameOfDialog}</p>
                <p className={style.lastMessage__text}>{props.lastMessage}</p>
            </div>

        </NavLink>
    )
}

export default DialogItem;