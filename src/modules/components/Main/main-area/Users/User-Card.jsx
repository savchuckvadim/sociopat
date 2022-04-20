import { NavLink } from 'react-router-dom';
import Icon from '../../../Elements/Icon';
import style from './User-Card.module.css';
import RedButton from '../../../Elements/Button/Red-Button'

const UserCard = (props) => {

    return (
        <div className={style.container}>
            <div className={style.icon__container}>
                <Icon user={props.user}/>

            </div>
            <NavLink className={style.login} to='profile'>
                <p >{props.name}</p>
            </NavLink>

            <div className={style.follow__container}>
                <RedButton className={style.followun} name={'Follow'}/>
                {/* <input  type="button" value="follow" /> */}

            </div>
        </div>
    )
};

export default UserCard
