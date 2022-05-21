import { NavLink } from 'react-router-dom';
import Icon from '../../../Elements/Icon';
import style from './User-Card.module.css';
import RedButton from '../../../Elements/Button/Red-Button'
import WhiteButton from '../../../Elements/Button/White-Button';
import { usersAPI } from '../../../../services/api';

const UserCard = (props) => {
    
let disable = props.followingInProgress.some(id => id === props.user.id)

    let followButton = <RedButton
    border={12}
    disable={disable}
        className={style.followun}
        onClick={() => {
            props.followThunk(props.user.id)

        }}

        name={'Follow'} />
    if (props.user.followed) {
        followButton =
            <WhiteButton
            border={12}
            grey={true}
            disable={disable}
                className={style.followun}
                onClick={() => {
                    props.unFollowThunk(props.user.id)

                }}

                name={'Unfollow'} />
    }
    let ava = props.user.photos.small
    return (
        <div className={style.frame}>
            <div className={style.icon__wrapper}>
                <Icon user={ava} />

            </div>
            <NavLink className={style.login} to={'../profile/' + props.user.id}>
                {/* +props.user.id */}
                {/*  */}
                <p >{props.name}</p>
            </NavLink>

            <div className={style.follow__wrapper}>
                {/* <RedButton className={style.followun} name={'Follow'} /> */}
                {/* <input  type="button" value="follow" /> */}
                {followButton}

            </div>
        </div>
    )
};

export default UserCard
