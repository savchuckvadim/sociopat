import React from "react"
import { connect } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { compose } from "redux"
import { dislike, getDataForLoadProfilePage, like, updateStatus } from "../../../../redux/reducers/profile/profile-reducer"
import { RootStateType } from "../../../../redux/store"
import { PostType, UserType } from "../../../../types/types"
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container"
import Profile from "./Profile"

const mapStateToProps = (state: RootStateType): MapStatePropsType => {

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

const withRouter = (WrappedComponent: any) => (props: MapStatePropsType) => {
    const params = useParams()

    return (
        <WrappedComponent {...props} params={params}
        />
    )
}

type ParamsType = {
    "*": string
    userId: string | undefined
}
type MapStatePropsType = {
    isAuth: boolean
    auth: UserType
    visitedUser: UserType
    posts: Array<PostType>
    likeInProgress: boolean


}
type MapDispatchPropsType = {
   
    updateStatus: (aboutMe: string) => void
    getDataForLoadProfilePage: (userId: number) => void
    like: (postId: number) => void
    dislike: (postId: number) => void
}
type ParamsForPropsType = {
    params:ParamsType
}

type PropsType = MapStatePropsType & MapDispatchPropsType & ParamsForPropsType



class ProfileContainer extends React.Component<PropsType> {

    getUserId = (): number => {
        if (this.props.params.userId !== undefined) {
            return Number(this.props.params.userId)
        }
        else {
            return Number(this.props.auth && this.props.auth.id)
        }

    }

    getProfileData = (userId: number) => {

        if (!this.props.visitedUser) {
            this.props.getDataForLoadProfilePage(userId)
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)
        let userId = this.getUserId()
        this.getProfileData(userId)

    }
    componentDidUpdate() {
        let userId = this.getUserId()
        this.getProfileData(userId)

    }

    render() {
        if (this.props.params.userId && `${this.props.params.userId}` === `${this.props.auth && this.props.auth.id}`) return <Navigate replace to={'../profile'} />
        if (!this.props.visitedUser) return <LightLoadingPageContainer />
        return (

            <Profile {...this.props}
                // profilePhoto={this.props.profile.photos.small}
                isCurrentUser={this.props.visitedUser.isAuthUser}
            />
        )
    }
}




export default compose(

    connect<MapStatePropsType, MapDispatchPropsType, ParamsForPropsType, RootStateType>(mapStateToProps, {
        // getAboutMe,
        updateStatus,
        getDataForLoadProfilePage,
        // loadPhoto,                //TODO
        like,
        dislike
    }),
    withRouter,

)(ProfileContainer)

