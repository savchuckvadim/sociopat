import React from "react"
import {connect} from "react-redux"
import {getAuth,} from "../../redux/reducers/auth/auth-reducer"
import Header from "./Header"



const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
        user: state.auth.currentUser,
        theme: state.theme
    }
}



class HeaderContainer extends React.Component {

    componentDidMount() {

        // this.props.getAuth()


    }

    render() {
        return <Header {
            ...this.props
        }
        />
    }
}
export default connect(mapStateToProps, {
    getAuth
})(HeaderContainer)