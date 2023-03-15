import Post from "./Posts/Post"
import nopost from '../../../../../../assets/imgs/posts/nopost.svg'
import style from './Posts-Area.module.css'
import { PostType, ProfileType } from "../../../../../types/types"
import React from "react"

type PostsAereaPropsType = {
    posts: Array<PostType>
    likeInProgress: boolean
    profile: ProfileType
    like: (postId: number) => void
    dislike: (postId: number) => void

}
const PostsArea: React.FC<PostsAereaPropsType> = (props) => {

    let postsarea: any = <img className={style.nopost} src={nopost} alt='no posts'></img>
    if (props.posts.length > 0) {
        postsarea = props.posts.map((post: PostType, index: number) => {
            if (post.author) {
                return <Post
                    postId={post.id}
                    key={`post-${post.id}`}
                    userName={`${post.author.profile.name} ${post.author.profile.surname}`}
                    author={post.author}
                    body={post.body}
                    postsImg={post.img}
                    userId={post.author.id}
                    like={props.like}
                    dislike={props.dislike}
                    likeInProgress={props.likeInProgress}
                    isAuthUserLikes={post.isAuthLikes}
                    likesCount={post.likesCount}
                    date={post.created}
                />
            }

        })
    }
    return postsarea

}

export default PostsArea