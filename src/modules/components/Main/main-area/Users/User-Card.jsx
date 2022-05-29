import { NavLink } from 'react-router-dom';
import Icon from '../../../Elements/Icon';
import style from './User-Card.module.css';
import FollowUnfollowButtons from '../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons';

const UserCard = (props) => {


    let ava = props.user.photos.small
    return (
        <div className={style.frame}>
            <div className={style.icon__wrapper}>
                <Icon user={ava} />

            </div>
            <NavLink className={style.login} to={'../profile/' + props.user.id}>
                <p onClick={() => {props.setVisitedUser(props.user)}} >{props.name}</p>
            </NavLink>

            <div className={style.follow__wrapper}>

        
                <FollowUnfollowButtons 
                user={props.user}  
                followThunk={props.followThunk}
                unFollowThunk={props.unFollowThunk}
                followingInProgress={props.followingInProgress}
                />
            </div>
        </div>
    )
};

export default UserCard
