import React from 'react'
import { LightLoadingPageContainer } from '../../../Elements/Loading/Light-Loading-Page-Container'
import PostsArea from './Posts-Area/Posts-Area'
import { ProfilePropsType } from './Profile-Container'
import ProfileInformation from './Profile-Information/Profile-Information'
import style from './Profile.module.css'
import { SendPostContainer } from './Send-Post/Send-Post-Container'


export const Profile: React.FC<ProfilePropsType> = (props) => {


  let profile

  props.visitedUser && props.auth &&
    props.visitedUser.profile
    ? profile = <div className={style.profile__container}>

      <ProfileInformation {...props} />
      <SendPostContainer />
      <PostsArea
        posts={props.posts}
        profile={props.visitedUser.profile}
        like={props.like}
        dislike={props.dislike}
        likeInProgress={props.likeInProgress}
      />

    </div>
    : profile = <LightLoadingPageContainer />

  return profile

}






export default Profile