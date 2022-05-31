import React, { useEffect, useState } from 'react';

import {LightLoadingPageContainer} from '../../../Elements/Loading/Light-Loading-Page-Container'
import Post from './Posts/Post';
// import { ProfileBaseContainer } from './Profile-Base/Profile-Base-Container';
import ProfileInformation from './Profile-Information/Profile-Information';
import style from './Profile.module.css';
import { SendPostContainer } from './Send-Post/Send-Post-Container';


export const Profile = (props) => {
 
   let userName = null
   let img = null
   
  if(props.isCurrentUser ){
      if(props.profile && JSON.stringify(props.profile) !== '{}' ){

        userName = props.profile.fullName
        img = props.profile.photos.small
      }
    
  }else {
    if(props.visitedUser ){
        userName = props.visitedUser.name
        img = props.visitedUser.photos.small
        
    }
    
  }
  
    
    // if(!props.isAuth) {return <Navigate replace to='../login' />}
let profile
 props.profile 
 ?  profile = <div className={style.profile__container}>
            <ProfileInformation {...props} userName={userName}  />
            <SendPostContainer />
            {props.posts.map((post, index) => {

                return <Post 
                key={`post-${index}`}
                img={img} 
                userName={userName} 
                body={post.body} 
                postsImg={post.img} />
            })}
        </div>
: profile = <LightLoadingPageContainer/>
    
    return profile

};






export default Profile;