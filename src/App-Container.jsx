import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { compose } from "redux"
import App from "./App"
import { LightLoadingPageContainer } from "./modules/components/Elements/Loading/Light-Loading-Page-Container"
import StartPage from "./modules/components/Start/Start-Page"
import { initialize } from "./modules/redux/reducers/app-reducer.ts"
import { getAuth } from "./modules/redux/reducers/auth/auth-reducer.ts"

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
        registrationStatus: state.registration.registrationStatus,
        preloader: state.preloader.inProgress

    }
}
const AppContainer = (props) => {

    useEffect(() => {
        if (!props.isAuth) {
            props.initialize()
            console.log('initialize')
        } else {
            console.log('allready initialized')
        }



    }, [])

    //     const { authenticated, user, signIn } = useSanctum()
    // console.log(authenticated)
    let app = <LightLoadingPageContainer />


    if (!props.isAuth && !props.preloader) {
        console.log('isAuth')
        console.log(props.isAuth)

        app = <StartPage />

    }
    else if (props.preloader) {
        app = <LightLoadingPageContainer />
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