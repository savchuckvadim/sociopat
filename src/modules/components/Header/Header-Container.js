import React from "react"
import {
    connect
} from "react-redux"
import {
    setAuthUserData,
    setCurrentUser
} from "../../redux/reducers/auth/auth-reducer"


import {
    usersAPI
} from "../../services/api"
import Header from "./Header"



const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
        user: state.auth.currentUser,
        theme: state.theme
    }
}
const mapDispatchToProps = (dispatch) => {
    const setUserData = (id, login, email) => {
        const action = setAuthUserData(id, login, email)
        dispatch(action)
    }
    const setCurrentUserData = (userProfile) => {

        const action = setCurrentUser(userProfile)
        dispatch(action)
    }
    return {
        setUserData,
        setCurrentUserData

    }
}

// export const HeaderContainer = connect(mapStateToProps)(Header)

class HeaderContainer extends React.Component {

    componentDidMount() {

        usersAPI.auth().then(res => {
            const resultCode = res.resultCode;
            const data = res.data;

            if (resultCode === 0) {
                this.props.setUserData(data.id, data.login, data.email)
            }

            usersAPI.getProfile(data.id)

                .then(res => {
                    const userProfile = res.data

                    this.props.setCurrentUserData(userProfile)
                })

        })



    }

    render() {
        return <Header {
            ...this.props
        }
        />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)