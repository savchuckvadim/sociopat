import React from "react"
import { connect } from "react-redux"
import { RootStateType } from "../../redux/store"
// import {getAuth} from "../../redux/reducers/auth/auth-reducer.ts"
import Header from "./Header"



const mapStateToProps = (state: RootStateType) => {
    return {
        user: state.auth.authUser,
        theme: state.theme
    }
}


const HeaderContainer = connect(mapStateToProps, null)(Header)
export default HeaderContainer