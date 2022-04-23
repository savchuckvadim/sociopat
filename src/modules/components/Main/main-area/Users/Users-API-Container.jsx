import axios from "axios";
import React from "react";

import Users from "./Users";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.fetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                const users = res.data.items;
                this.props.setTotalUsersCount(res.data.totalCount)
                this.props.setUsers(users);
                this.props.fetching(false)
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.fetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                const users = res.data.items;
                this.props.setTotalUsersCount(res.data.totalUsersCount)
                this.props.setUsers(users);
                this.props.fetching(false)

            })

    }
    render() {

        return (

            <>
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    isFetching={this.props.isFetching} />

            </>
        )
    }

}




export default UsersContainer;