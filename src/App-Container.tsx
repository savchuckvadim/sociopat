import React, { useEffect } from "react"
import { ConnectedProps, connect } from "react-redux"
import { compose } from "redux"
import App from "./App"
import StartPage from "./modules/components/Start/Start-Page"
import { initialize } from "./modules/redux/reducers/app-reducer"
import { getAuth } from "./modules/redux/reducers/auth/auth-reducer"
import { AppDispatchType, AppStateType } from "./modules/redux/store"
import WithRouter from "./modules/components/HOC/WithRouter"

// type WithRouterProps<P> = P & {
//     params: ReturnType<typeof useParams>;
// };

// const withRouter = <Props extends {}>(
//     WrappedComponent: React.ComponentType<WithRouterProps<Props>>
// ): React.FC<Props> => {
//     return (props: Props) => {
//         const params = useParams();

//         return <WrappedComponent {...props} params={params} />;
//     };
// };
// const withRouter = WrappedComponent => props => {
//     const params = useParams()
//     // etc... other react-router-dom v6 hooks

//     return (<WrappedComponent {...props} params={params} />
//     )
// }

type ConnectorType = typeof connector
const mapStateToProps = (state: AppStateType) => {

    return {
        isAuth: state.auth.isAuth,
        initialized: state.app.initialized,
        preloader: state.preloader.global.inProgress
        //TODO initializedInProgress 

    }
}
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        getAuth: () => dispatch(getAuth()),
        initialize: () => dispatch(initialize())
    }
}
const connector = connect(mapStateToProps, mapDispatchToProps);


const AppContainer: React.FC<ConnectedProps<ConnectorType>> = (props) => {

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

    // connect(mapStateToProps, {
    //     getAuth,
    //     initialize
    // }),
    connector,
    WithRouter
)(AppContainer)