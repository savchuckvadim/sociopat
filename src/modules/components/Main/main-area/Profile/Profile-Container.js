import React from "react";
import { connect } from "react-redux"
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";
import {  getDataForLoadProfilePage, getProfileAndSetVisitedUser, getStatus, loadPhoto, updateStatus } from "../../../../redux/reducers/profile/profile-reducer"



import Profile from "./Profile"

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.auth.isAuth,
        auth: state.auth.auth,
        profile: state.profileReducer.profile,

        visitedUser: state.profileReducer.visitedUser,

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
    
    userId = null
    isAuthUser = true
    currentUser
    


    getUserId = (params) => {

        if (this.props.params.userId ) {
            this.userId = this.props.params.userId;
            this.isAuthUser = false

        }
        else {

            this.userId = this.props.auth.id
            this.isAuthUser = true
           
        }
        
    }

    getProfileAndStatus = () => {
     
        // this.props.getProfileAndSetVisitedUser(this.userId)
        // this.props.getStatus(this.userId)
        
        this.props.getDataForLoadProfilePage(this.userId)
      
        
    }
    componentDidMount() {

        this.getUserId()
        this.getProfileAndStatus()

    }
    componentDidUpdate() {

        this.getUserId()
        this.getProfileAndStatus()

    }
    render() {
        
       if(this.props.params.userId && `${this.props.params.userId}` === `${this.props.auth.id}`) return <Navigate replace to={'../profile'} />
        return (

            <Profile {...this.props}
                isCurrentUser={this.isAuthUser}
             

            />
        )
    }
}




export default compose(

    connect(mapStateToProps, {

        getProfileAndSetVisitedUser,
        getStatus,
        updateStatus,
        getDataForLoadProfilePage,
        loadPhoto

    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

// export default connect(mapStateToProps, {

//     getProfile

// })(WithUrlDataContainerComponent)