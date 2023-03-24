import { NavLink } from 'react-router-dom'
import { UserType } from '../../../types/types'
import style from './Avatar.module.css'


type PropsType = {
    user: UserType
    size: number
    link?: string
    img?: string
    border?: string
}

const Avatar: React.FC<PropsType> = (props) => {
    let initials = null
    let img = props.user.profile.avatar
    // let border = props.border && 'none' 

    if (props.user) {

        if (props.user.profile.avatar) {
            img = props.user.profile.avatar
        } else {
            initials = (props.user.profile.name.substring(0, 1) + props.user.profile.surname.substring(0, 1)).toUpperCase()
        }

    } else {
        initials = 'SP'
    }



    let avatar = <div className={style.avatar}
        style={{
            backgroundImage: ` url(${img || null})`,
            width: props.size,
            height: props.size,
            // border: border,
            borderColor: 'white'
        }}>
        {!props.img && <h1 className={style.initials}
            style={{
                fontSize: props.size / 2.8
            }}
        >
            {initials}

        </h1>}

    </div>
    if (props.link && props.link !== undefined) {
        return <NavLink className={style.link} replace to={`${props.link}`}>{avatar}</NavLink>
    } else {
        return avatar
    }

}

export default Avatar