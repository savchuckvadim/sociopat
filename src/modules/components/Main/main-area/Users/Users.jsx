import axios from "axios";
import React from "react";
import UserCard from "./User-Card";
import style from './Users.module.css'


class Users extends React.Component {
    state = {
        users: [],
    }

    

    componentDidMount() {
        axios.get(`https://nmbrsapi.herokuapp.com/api/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    render() {
        return (
            <div className={style.container}>
                {this.state.users.map(user =>
                <UserCard name={user.name}/>)}
            </div>
        )
    }

}




export default Users;