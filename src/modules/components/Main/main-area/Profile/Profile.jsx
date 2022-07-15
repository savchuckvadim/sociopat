import React from 'react';
import {LightLoadingPageContainer} from '../../../Elements/Loading/Light-Loading-Page-Container'
import PostsArea from './Posts-Area/Posts-Area';
// import Post from './Posts/Post';
import ProfileInformation from './Profile-Information/Profile-Information';
import style from './Profile.module.css';
import { SendPostContainer } from './Send-Post/Send-Post-Container';


export const Profile = (props) => {
  
   let userName = null
   let img = null
   
   
  if(props.isCurrentUser ){
      if(props.profile && JSON.stringify(props.profile) !== '{}' ){

        // userName = props.profile.fullName /////old API
        userName = props.profile.name         /////////LARAVEL
        // img = props.profile.photos.small   /////old API
        img = null /////////LARAVEL

      }
    
  }else {
    if(props.visitedUser ){
     
        userName = props.visitedUser.name
        img = props.visitedUser.photos.small
        
    }
    
  }
  
    
let profile
 props.profile 
 ?  profile = <div className={style.profile__container}>
            <ProfileInformation {...props} userName={userName}  />
            <SendPostContainer />
            <PostsArea 
            posts={props.posts}
            img={img}
            profile={props.profile}
            />
            
        </div>
: profile = <LightLoadingPageContainer/>

    return profile

};






export default Profile;