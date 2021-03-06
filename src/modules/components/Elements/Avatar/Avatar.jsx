import { NavLink } from 'react-router-dom'
import style from './Avatar.module.css'

const Avatar = (props) => {

    // size={68}
    // border={false}
    // name={props.nameOfDialog}
    // link={`../profile/${props.userId}`}
    // img={props.iconOfDialog}

    let initials = 'SP.'
    props.user
        ? initials = (props.user.name.substring(0, 1) + props.user.surname.substring(0, 1)).toUpperCase()
        : initials = 'SP.'



    let avatar = <div className={style.avatar}
        style={{
            backgroundImage: ` url(${props.img || null})`,
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