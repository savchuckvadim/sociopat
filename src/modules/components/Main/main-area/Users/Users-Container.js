import {
    connect
} from "react-redux"
import {
    fetching,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
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
        isFetching: state.users.isFetching

    }
}
// const mapDispatchToProps = (dispatch) => {

//     const setCurrentPage = (page) => {
//         const action = setCurrentPageActionCreator(page)
//         dispatch(action)

//     }
//     const setUsers = (users) => {
//         const action = setUsersAC(users)

//         dispatch(action)

//     }
//     const setTotalUsersCount = (count) => {
//         const action = setTotalUsersCountAC(count);
//         dispatch(action)
//     }
//     const fetching = (bool) => {
//         const action = fetchingAC(bool);
//         dispatch(action)
//     }
//     return {
//         setCurrentPage,
//         setUsers,
//         setTotalUsersCount,
//         fetching

//     }
// }

export default connect(mapStateToProps, {
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    fetching,
    follow,
    unFollow

})(UsersContainer)