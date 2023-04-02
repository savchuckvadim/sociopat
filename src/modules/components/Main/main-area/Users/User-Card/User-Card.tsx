import { NavLink } from 'react-router-dom'
import style from './User-Card.module.scss'
import FollowUnfollowButtons from '../../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons'
import Avatar from '../../../../Elements/Avatar/Avatar'
import { UserType } from "../../../../../types/types"
import { FUPropsType } from '../../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons-Container'
import { UsersActionsTypes } from '../../../../../redux/reducers/users/users-reducer'

//TODO Navlink Typescripting

type PropsType = {
    user: UserType
    followThunk: (userId: number, authUser: UserType) => void
    unFollowThunk: (userId: number, authUser: UserType) => void
    toggleFollowingInProgress: (userId: number, isFetching: boolean) => UsersActionsTypes
    followingInProgress: Array<number>
    authUser: UserType
}
const UserCard = (props: PropsType) => {

    const FUProps: FUPropsType = {
        user: props.user,
        followThunk: props.followThunk,
        unFollowThunk: props.unFollowThunk,
        followingInProgress: props.followingInProgress,
        authUser: props.authUser,
        toggleFollowingInProgress: props.toggleFollowingInProgress
    }
    return (
        <div className={style.frame}>

            <Avatar
                size={68}
                link={`../profile/${props.user && props.user.id}`}
                user={props.user}
                // img={props.user && props.user.profile.avatar}
            />
{//@ts-ignore
            <NavLink className={style.login} to={props.user && '../profile/' +  props.user.id}>
                <p onClick={() => {
                    // props.setVisitedUser(props.user)
                }} >{`${props.user && props.user.profile.name} ${props.user && props.user.profile.surname}`}</p>
            </NavLink>
}
            <div className={style.follow__wrapper}>

                <FollowUnfollowButtons {...FUProps} />
            </div>
        </div>
    )
}

export default UserCard
