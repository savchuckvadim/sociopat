import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import App from "./App";
import { LightLoadingPageContainer } from "./modules/components/Elements/Loading/Light-Loading-Page-Container";

// import withAuthRedirect from "./modules/components/HOC/Auth-Redirect";
import StartPage from "./modules/components/Start/Start-Page";
import { initialize } from "./modules/redux/reducers/app-reducer";
import { laraGetAuth } from "./modules/redux/reducers/auth/auth-reducer";
// import { useSanctum } from "react-sanctum";
// import { laravelAPI } from "./modules/services/api-laravel";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks

    return (<WrappedComponent {...props} params={params} />
    );
};


const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.auth.isAuth,
        initialized: state.app.initialized,
        initialInProgress: state.app.inProgress

    }
}
const AppContainer = (props) => {

    useEffect(() => {
        props.initialize();
        // laravelAPI.me()

    }, [])

    //     const { authenticated, user, signIn } = useSanctum();
    // console.log(authenticated)
    let app = <LightLoadingPageContainer />


    if (!props.isAuth && !props.initialInProgress) {
        app = <StartPage />

    }
    else if (props.initialInProgress) {
        app = <LightLoadingPageContainer />
    }

    else {
        app = <App {...props} />
    }

    return app
   
}


export default compose(

    connect(mapStateToProps, {
        laraGetAuth,
        initialize
    }),

    withRouter
)(AppContainer)