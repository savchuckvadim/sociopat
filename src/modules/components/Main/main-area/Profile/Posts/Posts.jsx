import Post from './Post';
import style from './Posts.module.css'

const Posts = (props) => {
    debugger
    let posts = props.posts.map(post => (
        <Post img={props.profile.img} body={post.body} />
    ))
    
    return (
        <div className={style.area}>
            {posts}
        </div>
    )
};

export default Posts;