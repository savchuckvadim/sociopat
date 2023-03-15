import { NavLink } from 'react-router-dom'
import { UserType } from '../../../types/types'
import style from './Avatar.module.css'


// export type UserType = {
//     id: number 
//     email: string
//     name: string
//     followed: 0 | 1
//     followers: Array<UserType>
//     followeds: Array<UserType>
//     profile: ProfileType
//     postsCount: number 
//     isAuthUser:boolean
// } 


// export type ProfileType = {
//     about_me: string | null
//     avatar: string | null
//     created_at: string
//     email: string
//     hero: string | null
//     id: number | null
//     name: string
//     surname: string
//     updated_at: string
//     user_id: number | null
// }
type PropsType = {
    user: UserType
    size: number
    link?: string
    img?: string
    border?: number
}
const Avatar: React.FC<PropsType> = (props) => {
    let initials = null
    let img = props.user.profile.avatar
    let border = props.border

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
            border: border && 'none',
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