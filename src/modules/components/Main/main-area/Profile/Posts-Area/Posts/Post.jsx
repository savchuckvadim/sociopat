
import style from './Post.module.css';
import knife from '../../../../../../../assets/imgs/posts/knife.svg';
import knifeActive from '../../../../../../../assets/imgs/posts/knife-active.svg';

import repost from '../../../../../../../assets/imgs/posts/reply-share-circle.svg';
import eye from '../../../../../../../assets/imgs/posts/eye.svg';
import dots from '../../../../../../../assets/imgs/posts/dots-menu.svg'
import Author from '../../../../../Elements/Author/Author';
// let img = `https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80`
// let postsImg = `https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`

const Post = (props) => {
    
    let postsImg = null
    let dislike = knife
    let likesCount = null
    if (props.postsImg) {
        postsImg = <div key={`post-img-container`} className={style.img__wrapper}>
            <img  key={'post-img-container'} className={style.post__img} src={props.postsImg} alt="postsImg" />
        </div>
    }

    if(props.isAuthUserLikes){
        dislike = knifeActive
    }

    if(props.likesCount){
        likesCount = props.likesCount
    }
    

    return (

        <div className={style.wrapper}>
            <div className={style.header}>
                <Author {...props} size={56}/>

                <div className={style.functions}>
                    <img className={style.dots} src={dots} alt='dots'></img>
                </div>
            </div>
            <div className={style.body}>
                <div className={style.message__wrapper}>
                    <p className={style.message}>
                        {props.body}
                        
                    </p>
                </div>
                {/* <div className={style.img__container}>
                    <img className={style.post__img} src={props.postsImg} alt="postsImg" />
                </div> */}
                {postsImg}
            </div>
            <div className={style.footer}>
                <div className={style.actions__wrapper}>
                    <button className={style.action_button}
                    onClick={() => {
                        if(!props.likeInProgress){
                            if(!props.isAuthUserLikes){
                                props.like(props.id)
                            }else{
                                props.dislike(props.id)
                            }
                           
                        }
                        
                    }}
                    >
                        <img 
                        className={style.action} 
                        src={dislike} 
                        alt="dislike" 
                        
                        />
                        <p>{likesCount}</p>
                    </button>
                    <button className={style.action_button}>
                        <img className={style.action} src={repost} alt="repost" />
                    </button>

                </div>
                <div className={style.views}>
                   
                    <img className={style.icon} src={eye} alt="eye" />
                 
                    
                    <p className={style.quantity}>420</p>
                </div>
            </div>
        </div>

    )
}

export default Post