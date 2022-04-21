import { connect } from "react-redux"
import { fetchingAC, setCurrentPageActionCreator, setTotalUsersCountAC, setUsersAC } from "../../../../redux/reducers/users/users-reducer"
import Users from "./Users"
import UsersApiContainer from "./Users-API-Container"


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
const mapDispatchToProps = (dispatch) => {
    const setCurrentPage = (value) => {
        const action = setCurrentPageActionCreator(value)
        dispatch(action)
        
    }
    const setUsers = (users) => {
        const action = setUsersAC(users)
       
        dispatch(action)
       
    }
    const setTotalUsersCount = (count) => {
        const action = setTotalUsersCountAC(count);
        dispatch(action)
    }
    const fetching = (bool) => {
        const action = fetchingAC(bool);
        dispatch(action)
    }
    return {
        setCurrentPage,
        setUsers,
        setTotalUsersCount,
        fetching
       
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)