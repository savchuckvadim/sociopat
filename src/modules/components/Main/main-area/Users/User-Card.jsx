import { NavLink } from 'react-router-dom';
import Icon from '../../../Elements/Icon';
import style from './User-Card.module.css';


const UserCard = (props) => {

    return(
        <div className={style.container}>
           <div className={style.icon__container}>
           <Icon img='https://images.unsplash.com/photo-1634498481594-e82257b5c59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'/>

           </div>
            <NavLink to='profile'><p className={style.login}>{props.name}</p></NavLink>
            
            <div className={style.follow__container}>
                <input className={style.followun} type="button" value="follow" />
               
            </div>
        </div>
    )
};

export default UserCard
