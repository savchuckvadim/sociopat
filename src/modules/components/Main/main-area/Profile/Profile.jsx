
import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Post from './Posts/Post';
// import { ProfileBaseContainer } from './Profile-Base/Profile-Base-Container';
import ProfileInformation from './Profile-Information/Profile-Information';
import style from './Profile.module.css';
import { SendPostContainer } from './Send-Post/Send-Post-Container';


export const Profile = (props) => {

    return (
        <div className={style.profile__container}>
            <ProfileInformation {...props} user={props.user} />
            <SendPostContainer />
            {props.posts.map(post => {
                return <Post user={props.user} body={post.body} postsImg={post.img} />
            })}
            {/* <Post user={props.user} postsImg={img} />
            <Post user={props.user} />
            <Post user={props.user} postsImg={img1} />
            <Post user={props.user} postsImg={img2} /> */}

        </div>

    )

};






export default Profile;