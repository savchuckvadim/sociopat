import Post from './Post';
import style from './Posts.module.css'

const Posts = (props) => {
       

    let posts = props.posts.map(post => (
        
        <Post key={`post-${post.id}`} img={props.profile.img} body={post.body} />
    ))
 
    return (
        <div className={style.area}>
            {posts}
        </div>
    )
};

export default Posts;