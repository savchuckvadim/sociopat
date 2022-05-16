import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import App from "./App";
import { LightLoadingPageContainer } from "./modules/components/Elements/Loading/Light-Loading-Page-Container";
import withAuthRedirect from "./modules/components/HOC/Auth-Redirect";
import { initialize } from "./modules/redux/reducers/app-reducer";
import { getAuth } from "./modules/redux/reducers/auth/auth-reducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.auth.isAuth,
        initialized:state.app.initialized

    }
}
class AppContainer extends React.Component {

    componentDidMount() {
        this.props.initialize()
    }

    


    render() {
        debugger
        if(!this.props.initialized ){
            return <LightLoadingPageContainer/>
        }
        
         return (
            
             <App {...this.props} />
             
        )

       
    }
}


export default  compose(
    
    connect(mapStateToProps, {
        getAuth,
        initialize
    }),
    
    // withAuthRedirect
)(AppContainer)