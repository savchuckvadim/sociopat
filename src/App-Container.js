import React from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { compose } from "redux";
import App from "./App";
import { LightLoadingPageContainer } from "./modules/components/Elements/Loading/Light-Loading-Page-Container";
import LoginContainer from "./modules/components/Elements/Login-Registaration-Form/Login-Container";
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
       
        if(!this.props.isAuth && !this.props.initialInProgress){
            return (<>
            {/* <Routes >
                <Route path="/" index element={<StartPage />} />
                <Route path="login" element={<LoginContainer />} />
            </Routes> */}
            {/* <Navigate replace to='start' /> */}
             <StartPage/>
             </>
             )
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