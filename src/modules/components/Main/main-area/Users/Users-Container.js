import {
    connect
} from "react-redux"
import {
    fetching,
    follow,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingInProgress,
    unFollow
} from "../../../../redux/reducers/users/users-reducer"

import UsersContainer from "./Users-API-Container"



const mapStateToProps = (state) => {

    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        count: state.users.count,
        isFetching: state.users.isFetching,
        followingInProgress:state.users.followingInProgress

    }
}


export default connect(mapStateToProps, {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    fetching,
    follow,
    unFollow,
    toggleFollowingInProgress,
    getUsers

})(UsersContainer)