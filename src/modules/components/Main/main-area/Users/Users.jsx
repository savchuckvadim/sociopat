import axios from "axios";
import React from "react";
import Title from "../../../Elements/Title/Title";
import UserCard from "./User-Card";
import style from './Users.module.css'


class Users extends React.Component {
    state = {
        users: [],
        totalUsersCount: 0
    }





    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                const users = res.data.items;

                this.setState({ users });
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                const users = res.data.items;
//this.props.setUsers
                this.setState({ users });
            })

    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (

            <>

                <div className={style.title__container}>
                    <Title title={'People'} />

                </div>
                <div className={style.container}>
                    {this.state.users.map(user =>
                        <UserCard user={user} name={user.name} />)}
                </div>
                <div className={style.pages}>
                    {pages.map(p => {

                        return <span
                            onClick={() => { this.onPageChanged(p) }}
                           
                            className={this.props.currentPage === p && style.selectPage}>
                            {p}
                        </span>
                    })}
                </div>

            </>
        )
    }

}




export default Users;