import React from "react"
import { connect } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { compose } from "redux"
import { dislike, getDataForLoadProfilePage, like, loadPhoto, updateStatus } from "../../../../redux/reducers/profile/profile-reducer.ts"
import { RootStateType } from "../../../../redux/store"
import { PostType, UserType } from "../../../../types/types"
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container"
import Profile from "./Profile"

const mapStateToProps = (state: RootStateType) => {

    return {
        isAuth: state.auth.isAuth,
        auth: state.auth.authUser,
        // profile: state.profileReducer.visitedUser.profile,
        visitedUser: state.profile.visitedUser,
        posts: state.profile.posts,
        // status: state.profileReducer.status,
        likeInProgress: state.profile.likeInProgress,

    }
}



const withRouter = WrappedComponent => props => {
    const params = useParams()

    return (
        <WrappedComponent {...props} params={params}
        />
    )
}
type paramsType = {
    userId: string | null
}
type PropsType = {
    isAuth: boolean
    auth: UserType
    visitedUser: UserType
    posts: Array<PostType>
    likeInProgress: Array<number>
    params: paramsType
    updateStatus: (aboutMe: string) => void
    getDataForLoadProfilePage: (userId: number) => void
    like: (postId: number) => void
    dislike: (postId: number) => void

}

class ProfileContainer extends React.Component<PropsType> {

    constructor(props) {
        super(props)
        this.state = { userId: undefined, isAuthUser: false }
    }
    userId = null
    isAuthUser = true
    currentUser
    photo = null



    getUserId = (state, props) => {

        this.setState((state, props) => {
            if (props.params.userId) {
                if (state.userId !== Number(props.params.userId)) {

                    return {
                        userId: Number(props.params.userId),
                        isAuthUser: false
                    }
                }

            }
            else {
                if (state.userId !== props.auth.id) {

                    return {
                        userId: props.auth.id,
                        isAuthUser: true
                    }
                }
            }
        })

    }

    getProfileData = () => {

        // this.props.getProfileAndSetVisitedUser(this.userId)
        // this.props.getStatus(this.userId)
        if (this.state.userId) {
            if (!this.props.visitedUser) {
                this.props.getDataForLoadProfilePage(this.state.userId)

            } else {
                if (this.props.params.userId) {
                    if (`${this.props.params.userId}` !== `${this.props.visitedUser.id}`) {
                        this.props.getDataForLoadProfilePage(this.state.userId)
                    }
                } else {
                    if (this.props.visitedUser.id !== this.props.auth.id) {
                        this.props.getDataForLoadProfilePage(this.state.userId)
                    }
                }

            }
        }



    }
    componentDidMount() {

        window.scrollTo(0, 0)

        this.getUserId(this.state, this.props)
        this.getProfileData()

    }
    componentDidUpdate() {
        //TODO logic for not request    
        this.getUserId(this.state, this.props)
        this.getProfileData()

    }
    render() {

        if (this.props.params.userId && `${this.props.params.userId}` === `${this.props.auth.id}`) return <Navigate replace to={'../profile'} />
        if (!this.props.visitedUser) return <LightLoadingPageContainer />
        return (

            <Profile {...this.props}
                // profilePhoto={this.props.profile.photos.small}
                isCurrentUser={this.state.isAuthUser}


            />
        )
    }
}




export default compose(

    connect(mapStateToProps, {

        // getProfileAndSetVisitedUser,
        // getAboutMe,
        updateStatus,
        getDataForLoadProfilePage,
        // loadPhoto,                //TODO
        like,
        dislike


    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

// export default connect(mapStateToProps, {

//     getProfile

// })(WithUrlDataContainerComponent)