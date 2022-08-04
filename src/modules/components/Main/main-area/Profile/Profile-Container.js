import React from "react";
import { connect } from "react-redux"
import { Navigate, useParams } from "react-router-dom";
import { compose } from "redux";
import { dislike, getDataForLoadProfilePage, getStatus, like, loadPhoto, updateStatus } from "../../../../redux/reducers/profile/profile-reducer"
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";



import Profile from "./Profile"

const mapStateToProps = (state) => {
 
    return {
        isAuth: state.auth.auth.isAuth,
        auth: state.auth.auth,
        // profile: state.profileReducer.visitedUser.profile,
        visitedUser: state.profileReducer.visitedUser,
        posts: state.profileReducer.posts,
        status: state.profileReducer.status,
        likeInProgress: state.profileReducer.likeInProgress,

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

    getProfileData = () => {

        // this.props.getProfileAndSetVisitedUser(this.userId)
        // this.props.getStatus(this.userId)

        this.props.getDataForLoadProfilePage(this.userId)
        if(this.props.visitedUser){
            this.photo = this.props.visitedUser.photos.small
        }
      

        


    }
    componentDidMount() {
       
            window.scrollTo(0, 0);
         
        this.getUserId()
        this.getProfileData()

    }
    componentDidUpdate() {
        
        this.getUserId()
        this.getProfileData()

    }
    render() {
        
        if (this.props.params.userId && `${this.props.params.userId}` === `${this.props.auth.id}`) return <Navigate replace to={'../profile'} />
        if(!this.props.visitedUser) return <LightLoadingPageContainer/>
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

        // getProfileAndSetVisitedUser,
        getStatus,
        updateStatus,
        getDataForLoadProfilePage,
        loadPhoto,
        like,
        dislike
       

    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

// export default connect(mapStateToProps, {

//     getProfile

// })(WithUrlDataContainerComponent)