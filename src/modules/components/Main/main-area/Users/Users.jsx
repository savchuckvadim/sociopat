import axios from "axios";
import React from "react";
import Title from "../../../Elements/Title/Title";
import UserCard from "./User-Card";
import style from './Users.module.css'


class Users extends React.Component {
    state = {
        users: [],
    }



    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/5`)
            .then(res => {
                const users = res.data.items;
                // console.log(users)
                this.setState({ users });
            })
            axios.get(`https://social-network.samuraijs.com/api/1.0/users/3`)
            .then(res => {
                console.log(res.data)
            })    
    }

    render() {
        return (
            <><Title title={'People'} />
                <div className={style.container}>
                    {this.state.users.map(user =>
                        <UserCard user={user} name={user.name} />)}
                </div>
            </>
        )
    }

}




export default Users;