import { NavLink } from 'react-router-dom';
import Icon from '../../../Elements/Icon';
import style from './User-Card.module.css';
import RedButton from '../../../Elements/Button/Red-Button'
import WhiteButton from '../../../Elements/Button/White-Button';
import { follow, unfollow } from '../../../../services/api';

const UserCard = (props) => {

    let followButton = <RedButton
        className={style.followun}
        onClick={() => {

            follow(props.user.id).then(res => {
                if (res === 0) {
                    props.follow(props.user.id)
                    props.setUsers(props.users)
                }
            })
        }}
        name={'Follow'} />
    if (props.user.followed) {
        followButton =
            <WhiteButton
                className={style.followun}
                onClick={() => {
                    unfollow(props.user.id).then(res => {
                        if (res === 0) {
                            props.unFollow(props.user.id)
                        }

                    })
                }}
                name={'Unfollow'} />
    }
    let ava = props.user.photos.small
    return (
        <div className={style.container}>
            <div className={style.icon__container}>
                <Icon user={ava} />

            </div>
            <NavLink className={style.login} to={'../profile/' + props.user.id}>
                {/* +props.user.id */}
                {/*  */}
                <p >{props.name}</p>
            </NavLink>

            <div className={style.follow__container}>
                {/* <RedButton className={style.followun} name={'Follow'} /> */}
                {/* <input  type="button" value="follow" /> */}
                {followButton}

            </div>
        </div>
    )
};

export default UserCard
