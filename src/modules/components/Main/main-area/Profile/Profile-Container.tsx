import React from "react"
import { connect } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { compose } from "redux"
import { getDialog } from "../../../../redux/reducers/dialogs/dialogs-reducer"
import { dislike, getDataForLoadProfilePage, like, updateAboutMe } from "../../../../redux/reducers/profile/profile-reducer"
import { AppStateType } from "../../../../redux/store"
import { DialogType, PostType, UserType } from "../../../../types/types"
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container"
import Profile from "./Profile"

const mapStateToProps = (state: AppStateType): MapStatePropsType => {

    return {
        isAuth: state.auth.isAuth,
        auth: state.auth.authUser,
        visitedUser: state.profile.visitedUser,
        posts: state.profile.posts,
        likeInProgress: state.profile.likeInProgress,
        isProfileFetching: state.profile.isProfileFetching,
        isPostSending: state.profile.isPostSending,
        currentDialog: state.dialogsReducer.currentDialog,
       

    }
}

const withRouter = (WrappedComponent: any) => (props: MapStatePropsType) => {
    const params = useParams()

    return (
        <WrappedComponent {...props} params={params}
        />
    )
}

export type ParamsType = {
    "*": string
    userId: string | undefined
}

type MapStatePropsType = {
    isAuth: boolean
    auth: UserType | null
    visitedUser: UserType | null
    posts: Array<PostType>
    likeInProgress: boolean
    isProfileFetching: boolean
    isPostSending: boolean
    currentDialog: DialogType | null
    




}
type MapDispatchPropsType = {

    updateAboutMe: (aboutMe: string) => void
    getDataForLoadProfilePage: (userId: number) => void
    like: (postId: number) => void
    dislike: (postId: number) => void
}
type ParamsForPropsType = {
    params: ParamsType
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & ParamsForPropsType



class ProfileContainer extends React.Component<ProfilePropsType> {

    getUserId = (): number | undefined => {

        if (this.props.params.userId !== undefined) {
            return Number(this.props.params.userId)
        }
        else {
            if (this.props.auth) {
                return Number(this.props.auth.id)
            }

        }

        //TODO :
        return undefined
    }

    getProfileData = (userId: number | undefined) => {
        userId !== undefined && this.props.getDataForLoadProfilePage(userId)
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
        if (this.props.auth) {
            if (!this.props.currentDialog) {
                if (this.props.params.userId && `${this.props.params.userId}` === `${this.props.auth && this.props.auth.id}`) return <Navigate replace to={'../profile'} />
                if (!this.props.visitedUser || this.props.isProfileFetching) return <LightLoadingPageContainer />
                return (

                    <Profile {...this.props}
                    // profilePhoto={this.props.profile.photos.small}
                    // isCurrentUser={this.props.visitedUser.isAuthUser}
                    />
                )
            } else {
                return <Navigate to={`../messages/dialog/${this.props.currentDialog.id}`} replace={true} />
            }

        }

    }
}




export default compose(
    // @ts-ignore
    connect<MapStatePropsType, MapDispatchPropsType, ParamsForPropsType, AppStateType>(mapStateToProps, {
        // getAboutMe,
        updateAboutMe,
        getDataForLoadProfilePage,
        // loadPhoto,                //TODO
        like,
        dislike,

        getDialog,
    }),
    withRouter,

)(ProfileContainer)

