import React from "react";
import { connect } from "react-redux"
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { getDataForLoadProfilePage, getProfileAndSetVisitedUser, getStatus, loadPhoto, updateStatus } from "../../../../redux/reducers/profile/profile-reducer"
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";



import Profile from "./Profile"

const mapStateToProps = (state) => {
 
    return {
        isAuth: state.auth.auth.isAuth,
        auth: state.auth.auth,
        profile: state.profileReducer.profile,
        visitedUser: state.profileReducer.visitedUser,
        posts: state.profileReducer.posts,
        status: state.profileReducer.status,


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
    photo = null



    getUserId = (params) => {

        if (this.props.params.userId) {
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
        if(this.props.profile){
            this.photo = this.props.profile.photos.small
        }
        


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
      
        if (this.props.params.userId && `${this.props.params.userId}` === `${this.props.auth.id}`) return <Navigate replace to={'../profile'} />
        if(!this.props.profile) return <LightLoadingPageContainer/>
        return (

            <Profile {...this.props}
                // profilePhoto={this.props.profile.photos.small}
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