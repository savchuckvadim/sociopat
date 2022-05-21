import Icon from '../../../../../Elements/Icon';
import style from '../../Posts/Post.module.css';
import dislike from '../../../../../../../assets/imgs/posts/knife.svg';
import repost from '../../../../../../../assets/imgs/posts/reply-share-circle.svg';
import eye from '../../../../../../../assets/imgs/posts/eye.svg';
import dots from '../../../../../../../assets/imgs/posts/dots-menu.svg'

const Post = (props) => {
    
    let postsImg = null
    if (props.postsImg) {
        postsImg = <div key={`post-img-container`} className={style.img__wrapper}>
            <img  key={'post-img-container'} className={style.post__img} src={props.postsImg} alt="postsImg" />
        </div>
    }


    return (

        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.user__wrapper}>
                    <div className={style.icon__wrapper}>
                        <Icon user={props.user} />
                    </div>

                    <div className={style.user__info}>
                        <p className={style.name}>Nmbrs Fuckoff</p>
                        <p className={style.date}> 5 min ago</p>
                    </div>

                </div>
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
                    <button className={style.action_button}>
                        <img className={style.action} src={dislike} alt="dislike" />
                    </button>
                    <button className={style.action_button}>
                        <img className={style.action} src={repost} alt="repost" />
                    </button>

                </div>
                
            </div>
        </div>

    )

}