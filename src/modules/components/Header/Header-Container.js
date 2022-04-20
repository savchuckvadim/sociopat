import { connect } from "react-redux"
import Header from "./Header"



const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
        theme:state.theme
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export const HeaderContainer = connect(mapStateToProps)(Header)