import React from "react";
import { connect } from "react-redux"
import { useParams } from "react-router-dom";
import { getAuth } from "../../../../redux/reducers/auth/auth-reducer";

import { getProfile, setProfile } from "../../../../redux/reducers/profile-reducer"
import { usersAPI } from "../../../../services/api";
import Profile from "./Profile"


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
            else{
               
                if(this.props.user.userId){
                    userId = this.props.user.userId
                }
            }
          
        this.props.getProfile(userId)
        
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}



const mapStateToProps = (state) => {
    
    
    return {
        profile: state.profileReducer.profile,
        user: state.auth.currentUser,
        posts: state.profileReducer.posts,
        
    }
}



let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {

    getProfile

})(WithUrlDataContainerComponent)