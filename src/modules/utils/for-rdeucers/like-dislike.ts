import {ProfileActionsTypes} from "../../redux/reducers/profile/profile-reducer"
import { AppDispatchType, AppStateType } from "../../redux/store"
import { ResultCodesEnum } from "../../services/api-laravel"
import { postAPI } from "../../services/post-api"


export const likeDislikeFollow = async (
    isLikes: boolean,
    dispatch: AppDispatchType, state: AppStateType,
    postId: number,
    likeInProgress: (bool: boolean) => ProfileActionsTypes,
    setLike: (postId: number) => ProfileActionsTypes,
    setDislike: (postId: number) => ProfileActionsTypes,

) => {

    if (!state.profile.likeInProgress) {
        dispatch(likeInProgress(true))
        if (isLikes) {
            const res = await postAPI.like(postId)
            if (res.resultCode === ResultCodesEnum.Success) {
                dispatch(setLike(postId))
            } else {
                alert(res.message)
            }

        } else {
            const res = await postAPI.dislike(postId)
            if (res.resultCode === ResultCodesEnum.Success) {
                dispatch(setDislike(postId))
            } else {
                alert(res.message)
            }

        }

        dispatch(likeInProgress(false))

    }
}