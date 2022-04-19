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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(res => {
                const users = res.data.items;
                console.log(users)
                this.setState({ users });
            })
    }

    render() {
        return (
            <><Title title={'People'} />
                <div className={style.container}>
                    {this.state.users.map(user =>
                        <UserCard name={user.name} />)}
                </div>
            </>
        )
    }

}




export default Users;