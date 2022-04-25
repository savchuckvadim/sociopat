import style from './Icon.module.css';
import logo from '../../../assets/imgs/logo.svg'
const Icon = (props) => {
    //user: avatar or Name Surname
    //theme: red
    // debugger
    let icon

   
        if (props.img) {

            icon =
                <div className={style.icon__container}>
                    <img className={style.icon} src={props.img} alt="icon" />
                </div>

        } else {
            icon =
                <div className={style.icon__container}>
                    <div className={style.initials__container}>
                        < img className={style.icon} src={logo} alt="icon" />
                        {/* <p
                            className={style.initials}
    
                        >SP
                            {props.user.name[0]} {props.user.surname[0]}
                            </p> */}
                    </div>
                </div>
        }
  

    return icon
}
export default Icon;