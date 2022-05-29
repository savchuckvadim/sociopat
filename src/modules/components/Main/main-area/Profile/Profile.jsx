import React, { useEffect, useState } from 'react';


import Post from './Posts/Post';
// import { ProfileBaseContainer } from './Profile-Base/Profile-Base-Container';
import ProfileInformation from './Profile-Information/Profile-Information';
import style from './Profile.module.css';
import { SendPostContainer } from './Send-Post/Send-Post-Container';


export const Profile = (props) => {
   
    
    // if(!props.isAuth) {return <Navigate replace to='../login' />}
    return (

        <div className={style.profile__container}>
            <ProfileInformation {...props}  />
            <SendPostContainer />
            {props.posts.map((post, index) => {

                return <Post key={`post-${index}`} user={props.visitedUser} body={post.body} postsImg={post.img} />
            })}


        </div>

    )

};






export default Profile;