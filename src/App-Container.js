import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import App from "./App";
import { LightLoadingPageContainer } from "./modules/components/Elements/Loading/Light-Loading-Page-Container";
import withAuthRedirect from "./modules/components/HOC/Auth-Redirect";
import StartPage from "./modules/components/Start/Start-Page";
import { initialize } from "./modules/redux/reducers/app-reducer";
import { getAuth } from "./modules/redux/reducers/auth/auth-reducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.auth.isAuth,
        initialized:state.app.initialized,
        initialInProgress:state.app.inProgress

    }
}
class AppContainer extends React.Component {

    componentDidMount() {
        this.props.initialize()
    }

    


    render() {
       debugger
        if(!this.props.isAuth && !this.props.initialInProgress){
            return <StartPage/>
        }
        if(this.props.initialInProgress){
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