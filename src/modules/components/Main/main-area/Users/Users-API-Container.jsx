
import React from "react";
import Users from "./Users";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)

    }
    // componentDidUpdate() {
    //     this.props.requestUsers(this.props.currentPage, this.props.pageSize)

    // }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
                    isFetching={this.props.isFetching}
                    followThunk={this.props.followThunk}
                    unFollowThunk={this.props.unFollowThunk}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                    setVisitedUser={this.props.setVisitedUser}
                    authUser={this.props.authUser}
                />

            </>
        )
    }

}




export default UsersContainer;