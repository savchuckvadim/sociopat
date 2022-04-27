import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { getAuth } from "../../redux/reducers/auth/auth-reducer"
import Sociopath from "../Sociopath-App/Sociopath"
import StartPage from "../Start/Start-Page"

const mapStateToProps = (state) => {

    return {
        auth: state.auth.auth.id
    }
}


class AuthRedirectComponent extends React.Component {

    componentDidMount() {
        debugger
        this.props.getAuth()


    }
    render() {
        if (!this.props.auth) return <Navigate replace to='start' />
        return <Sociopath/>
    }
  

}
const AuthRedirectComponentContainer = connect(mapStateToProps, {
    getAuth
})(AuthRedirectComponent)
export default AuthRedirectComponentContainer




export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component{
        render(){
            if (!this.props.auth) return <Navigate replace to='start' />
            return <Component {...this.props} />
        }
    }
}