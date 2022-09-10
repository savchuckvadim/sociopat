import { LikeInProgressType, SetDislikeType, SetLikeType } from "../../redux/reducers/profile/profile-reducer"
import { AppDispatchType, RootStateType } from "../../redux/store"
import { postAPI } from "../../services/api-laravel"

export const likeDislikeFollow = async(
    isLikes:boolean,
    dispatch: AppDispatchType, state: RootStateType,
    postId:number,
    likeInProgress: (bool:boolean) => LikeInProgressType,
    setLike: (postId:number) => SetLikeType,
    setDislike: (postId:number) => SetDislikeType,
    
) => {

    if (!state.profile.likeInProgress) {
        dispatch(likeInProgress(true))
        if(isLikes ){
            await postAPI.like(postId)
            dispatch(setLike(postId))
        }else{
            await postAPI.dislike(postId)
            dispatch(setDislike(postId))
        }  
       
        dispatch(likeInProgress(false))
        
    }
}