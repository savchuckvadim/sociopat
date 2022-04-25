import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import { setAuthUserData } from "../../redux/reducers/auth/auth-reducer"
import { setCurrentUser } from "../../redux/reducers/current-user/current-user-reducer"


import { getProfile } from "../../services/api"
import Header from "./Header"



const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        user: state.currentUser,
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
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                const resultCode = res.data.resultCode;
                const data = res.data.data;

                if (resultCode === 0) {
                    this.props.setUserData(data.id, data.login, data.email)
                }

              getProfile(data.id)

                .then(res => {
                    const userProfile = res.data
                    
                    this.props.setCurrentUserData(userProfile)
                })

            })
            

      
    }

    render() {
        return <Header {...this.props} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)