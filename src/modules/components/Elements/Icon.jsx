import style from './Icon.module.css';
import logo from '../../../assets/imgs/logo.svg'
const Icon = (props) => {
    //user: avatar or Name Surname
    //theme: red
  
    let icon

   let woman = 'https://images.unsplash.com/photo-1612461049526-4bb85ccd903f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858' 
        if (props.img) {

            icon =
                <div className={style.icon__container}>
                    <img className={style.icon} src={props.img} alt="icon" />
                </div>

        } else {
            icon =
                <div className={style.icon__container}>
                    <div className={style.initials__container}>
                        < img className={style.icon} src={woman} alt="icon" />
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