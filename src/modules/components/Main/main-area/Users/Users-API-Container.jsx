
import React from "react";
import { getUsers } from "../../../../services/api";

import Users from "./Users";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.fetching(true)
        getUsers(this.props.currentPage, this.props.pageSize)
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
        getUsers(pageNumber, this.props.pageSize)
       
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