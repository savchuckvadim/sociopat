import React from "react"
import { connect } from "react-redux"
import { ThemeStateType } from "../../redux/reducers/theme/style-reducer"
import { RootStateType } from "../../redux/store"
import { UserType } from "../../types/types"
// import {getAuth} from "../../redux/reducers/auth/auth-reducer.ts"
import Header from "./Header"



const mapStateToProps = (state: RootStateType) => {
    return {
        user: state.auth.authUser,
        theme: state.theme
    }
}

export type HeaderPropsType ={
    user: UserType
    theme: ThemeStateType
}
const HeaderContainer = connect(mapStateToProps, null)(Header)
export default HeaderContainer