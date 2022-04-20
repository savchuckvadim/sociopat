import { connect } from "react-redux"
import { setCurrentPageActionCreator } from "../../../../redux/reducers/users/users-reducer"
import Users from "./Users"


const mapStateToProps = (state) => {
debugger
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    const setCurrentPage = (value) => {
        const action = setCurrentPageActionCreator(value)
        dispatch(action)
    }
    return {
        setCurrentPage
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)