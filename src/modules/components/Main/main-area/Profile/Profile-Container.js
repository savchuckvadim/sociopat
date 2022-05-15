import React from "react";
import { connect } from "react-redux"
import { useParams } from "react-router-dom";
import { compose } from "redux";


import { getProfile, getStatus,  updateStatus } from "../../../../redux/reducers/profile-reducer"
// import { usersAPI } from "../../../../services/api";
import withAuthRedirect from "../../../HOC/Auth-Redirect";
import Profile from "./Profile"

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.auth.isAuth,
        auth:state.auth.auth,
        profile: state.profileReducer.profile,
        user: state.auth.currentUser,
        posts: state.profileReducer.posts,
        status: state.profileReducer.status
        

    }
}



const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks

    return (
        <WrappedComponent
            {...props}
            params={params}
        // etc...
        />
    );
};


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId

        if (this.props.params.userId) {
            userId = this.props.params.userId;

        }
        else {

            if (this.props.user.userId) {
                userId = this.props.user.userId
            }else{
                userId = this.props.auth.userId
            }
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
        // if (!this.props.isAuth) return <Navigate redirect to='../login' />
        return (

            <Profile {...this.props} />
        )
    }
}


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)



export default  compose(
    
    connect(mapStateToProps, {

        getProfile,
        getStatus,
        updateStatus
    
    }),
    withRouter,  
    // withAuthRedirect
)(ProfileContainer)

// export default connect(mapStateToProps, {

//     getProfile

// })(WithUrlDataContainerComponent)