import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { compose } from "redux"
import App from "./App"
import StartPage from "./modules/components/Start/Start-Page"
import { initialize } from "./modules/redux/reducers/app-reducer"
import { getAuth } from "./modules/redux/reducers/auth/auth-reducer"

const withRouter = WrappedComponent => props => {
    const params = useParams()
    // etc... other react-router-dom v6 hooks

    return (<WrappedComponent {...props} params={params} />
    )
}


const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        initialized: state.app.initialized,
        initialInProgress: state.app.inProgress,
        // registrationStatus: state.registration.registrationStatus,
        preloader: state.preloader.global.inProgress

    }
}
const AppContainer = (props) => {

    useEffect(() => {

        if (!props.isAuth) {
            props.initialize()

        } else {
            console.log('allready initialized')
        }



    }, [])


    let app = <App {...props} />


    if (!props.isAuth) {

        app = <StartPage />

    }
 

    else {
        app = <App {...props} />
    }

    return app

}


export default compose(

    connect(mapStateToProps, {
        getAuth,
        initialize
    }),

    withRouter
)(AppContainer)