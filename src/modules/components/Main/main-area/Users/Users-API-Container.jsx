
import React from "react";
import Users from "./Users";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}

                />

            </>
        )
    }

}




export default UsersContainer;