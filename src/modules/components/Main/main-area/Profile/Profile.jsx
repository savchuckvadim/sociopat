
import Post from './Posts/Post';
// import { ProfileBaseContainer } from './Profile-Base/Profile-Base-Container';
import ProfileInformation from './Profile-Information/Profile-Information';
import style from './Profile.module.css';
import { SendPostContainer } from './Send-Post/Send-Post-Container';

const Profile = (props) => {
    // let img = 'https://images.unsplash.com/photo-1557093793-e196ae071479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    // let img1 = 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    // let img2 = 'https://images.unsplash.com/photo-1531778272849-d1dd22444c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=460&q=80'
    return (
        <div className={style.profile__container}>
            <ProfileInformation user={props.user} />
            <SendPostContainer/>
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