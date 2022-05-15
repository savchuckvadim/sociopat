import RedButton from "../Elements/Button/Red-Button"
import style from './Logout.module.css'
const Logout = (props) => {

    return (
        <div className={style.logout__wrapper}>
           
            <RedButton onClick={props.logout} name={'logout'} />
           
        </div>
    )
}

export default Logout