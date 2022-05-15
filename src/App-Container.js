import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import App from "./App";
import withAuthRedirect from "./modules/components/HOC/Auth-Redirect";
import { getAuth } from "./modules/redux/reducers/auth/auth-reducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.auth.isAuth,

    }
}
class AppContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth()
    }

    

    render() {
       
        return (
            <App {...this.props} />
        )
    }
}


export default  compose(
    
    connect(mapStateToProps, {
        getAuth
    }),
    
    // withAuthRedirect
)(AppContainer)