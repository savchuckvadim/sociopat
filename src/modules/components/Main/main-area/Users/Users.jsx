import UserCard from "./User-Card";
import style from './Users.module.css'

const Users = () => (

    <div className={style.container}>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
    </div>
)

export default Users;