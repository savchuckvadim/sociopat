import { NavLink } from "react-router-dom"
import RedButton from "../Elements/Button/Red-Button"
import WhiteButton from "../Elements/Button/White-Button"
import style from './Logout.module.css'
const Logout = (props) => {
   
    return (
        <div className={style.logout__wrapper}>
            <NavLink to='../login' >
                <WhiteButton border={16} onClick={props.logout} name={'logout'}/>
            </NavLink>
        </div>
    )
}

export default Logout