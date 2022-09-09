import React from "react"
import { connect } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { compose } from "redux"

import { dislike, getDataForLoadProfilePage, like, updateStatus } from "../../../../redux/reducers/profile/profile-reducer"
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



const withRouter = (WrappedComponent:any)  => (props: MapStatePropsType) => {
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
    likeInProgress: Array<number>
    params: ParamsType
    updateStatus: (aboutMe: string) => void
    getDataForLoadProfilePage: (userId: number) => void
    like: (postId: number) => void
    dislike: (postId: number) => void
}

//TODO объединение типов в один из двух
type PropsType = MapStatePropsType & ParamsType

type StateType = {
    userId: number | undefined
    isAuthUser: boolean
}

class ProfileContainer extends React.Component<PropsType, StateType> {

    constructor(props: any) {
        super(props)
        this.state = { userId: undefined, isAuthUser: false }
    }

    getUserId = (state: StateType, props: PropsType) => {

        this.setState((state, props):StateType => {
            if (props.params.userId !== undefined) {
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
                        userId: Number(props.auth.id),
                        isAuthUser: true
                    }
                }
            }
            return this.state
        })

    }

    getProfileData = () => {

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
    
)(ProfileContainer)

