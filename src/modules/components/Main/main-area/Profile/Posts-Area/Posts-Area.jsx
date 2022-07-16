import Post from "./Posts/Post";
import nopost from '../../../../../../assets/imgs/posts/nopost.svg';
import style from './Posts-Area.module.css'

const PostsArea = (props) => {
    
    let postsarea = <img className={style.nopost} src={nopost} alt='no posts'></img>
    if (props.posts.length > 0) {
        postsarea = props.posts.map((post, index) => {

            return <Post
                key={`post-${index}`}
                img={props.img}
                userName={`${post.author.name} ${post.author.surname}`}
                body={post.body}
                postsImg={post.img}
                userId={props.profile.userId}
            />
        })
    }
    return postsarea

}

export default PostsArea