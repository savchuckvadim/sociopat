import { NavLink } from 'react-router-dom';
import style from './User-Card.module.css';
import FollowUnfollowButtons from '../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons';
import Avatar from '../../../Elements/Avatar/Avatar';

const UserCard = (props) => {


    return (
        <div className={style.frame}>
           
                <Avatar
                size={68}
                name={props.name}
                link={`../profile/${props.user.id}`}
                // img={props.user.photos.small}
                />

            <NavLink className={style.login} to={'../profile/' + props.user.id}>
                <p onClick={() => {
                    // props.setVisitedUser(props.user)
                    }} >{props.name}</p>
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
