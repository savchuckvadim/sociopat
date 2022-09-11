import { NavLink } from 'react-router-dom'
import style from './User-Card.module.css'
import FollowUnfollowButtons from '../../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons'
import Avatar from '../../../../Elements/Avatar/Avatar'
import { UserType } from "../../../../../types/types"

//TODO Navlink Typescripting

type PropsType = {
    user: UserType
    followThunk: (userId: number, authUser: UserType) => void
    unFollowThunk: (userId: number, authUser: UserType) => void
    followingInProgress: Array<number>
    authUser: UserType
}
const UserCard = (props: PropsType) => {


    return (
        <div className={style.frame}>

            <Avatar
                size={68}
                link={`../profile/${props.user && props.user.id}`}
                user={props.user}
                img={props.user && props.user.profile.avatar}
            />

            {/* <NavLink className={style.login} to={props.user && '../profile/' +  props.user.id}>
                <p onClick={() => {
                    // props.setVisitedUser(props.user)
                }} >{`${props.user && props.user.profile.name} ${props.user && props.user.profile.surname}`}</p>
            </NavLink> */}

            <div className={style.follow__wrapper}>


                <FollowUnfollowButtons
                    user={props.user}
                    followThunk={props.followThunk}
                    unFollowThunk={props.unFollowThunk}
                    followingInProgress={props.followingInProgress}
                    authUser={props.authUser}
                />
            </div>
        </div>
    )
}

export default UserCard
