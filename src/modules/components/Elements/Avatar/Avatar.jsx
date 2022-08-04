import { NavLink } from 'react-router-dom'
import style from './Avatar.module.css'

const Avatar = (props) => {

    // size={68}
    // border={false}
    // user={props.user} -> name, surname, photos->small
    // link={`../profile/${props.userId}`}
   

    let initials = 'SP'
    let img = null
    if (props.user) {
        initials = (props.user.profile.name.substring(0, 1) + props.user.profile.surname.substring(0, 1)).toUpperCase()
        if(props.user.photos.small){
            initials = null
        }
        img = props.user.photos.small

    } else {
        initials = 'SP'
    }
        
       
       



let avatar = <div className={style.avatar}
    style={{
        backgroundImage: ` url(${img || null})`,
        width: props.size,
        height: props.size,
        border: props.border || 'none'
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