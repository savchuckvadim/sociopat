import style from './Icon.module.css';

const Icon = (props) => {
    //user: avatar or Name Surname
    //theme: red
    let icon
  
    if (props.user.photo) {

        icon =
            <div className={style.icon__container}>
                <img className={style.icon} src={props.user.photo} alt="icon" />
            </div>

    } else {
        icon =
            <div className={style.icon__container}>
                <div className={style.initials__container}>
                    <p
                        className={style.initials}

                    >{props.user.name[0]} {props.user.surname[0]}</p>
                </div>
            </div>
    }
    return icon
}
export default Icon;