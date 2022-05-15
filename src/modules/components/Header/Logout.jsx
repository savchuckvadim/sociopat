import { NavLink } from "react-router-dom"
import RedButton from "../Elements/Button/Red-Button"
import style from './Logout.module.css'
const Logout = (props) => {
   
    return (
        <div className={style.logout__wrapper}>
            <NavLink to='../login' >
                <RedButton onClick={props.logout} name={'logout'}></RedButton>
            </NavLink>
        </div>
    )
}

export default Logout