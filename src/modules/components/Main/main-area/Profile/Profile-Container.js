import React from "react";
import { connect } from "react-redux"
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { getProfile, getStatus, updateStatus } from "../../../../redux/reducers/profile-reducer"
import Profile from "./Profile"

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.auth.isAuth,
        auth: state.auth.auth,
        profile: state.profileReducer.profile,
        // user: state.auth.currentUser,
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
    isCurrentUser = true
    getUserId = (params) => {
        if (this.props.params.userId) {
            this.userId = this.props.params.userId;
            this.isCurrentUser = false

        }
        else {

            this.userId = this.props.auth.id
            this.isCurrentUser = true
        }
    }

    getProfileAndStatus = () => {
        this.props.getProfile(this.userId)
        this.props.getStatus(this.userId)
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
        return (

            <Profile {...this.props} isCurrentUser={this.isCurrentUser} />
        )
    }
}
// const ProfileContainer = (props) => {

// const [userId, setUserId] = useState(null)
// const params = props.params;
// const getUserId = (params) => {
//     if (params.userId !== undefined) {
//      setUserId(params.userId);

//     }
//     else {

//         if (props.user.userId) {
//            setUserId( props.user.userId)
//         }else{
//            setUserId(props.auth.id)
//         }
//     }
// }

// const getProfileAndStatus = () => {
//     props.getProfile(userId)
//     props.getStatus(userId)
// }
//     useEffect(() => {


//         getUserId(params)
//         getProfileAndStatus()
//     }, [])


//         return (

//             <Profile {...props} />
//         )

// }

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)



export default compose(

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