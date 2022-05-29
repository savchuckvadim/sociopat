import React, { useEffect, useState } from 'react';


import Post from './Posts/Post';
// import { ProfileBaseContainer } from './Profile-Base/Profile-Base-Container';
import ProfileInformation from './Profile-Information/Profile-Information';
import style from './Profile.module.css';
import { SendPostContainer } from './Send-Post/Send-Post-Container';


export const Profile = (props) => {
 
   let postUserName = null
   let img = null
  if(props.isCurrentUser ){
      if(props.profile && JSON.stringify(props.profile) !== '{}' ){

        postUserName = props.profile.fullName
        img = props.profile.photos.small
      }
    
  }else{
    postUserName = props.user.name
    img = props.user.photos.small
  }

    
    // if(!props.isAuth) {return <Navigate replace to='../login' />}
    return (

        <div className={style.profile__container}>
            <ProfileInformation {...props}  />
            <SendPostContainer />
            {props.posts.map((post, index) => {

                return <Post 
                key={`post-${index}`}
                img={img} 
                userName={postUserName} 
                body={post.body} 
                postsImg={post.img} />
            })}


        </div>

    )

};






export default Profile;