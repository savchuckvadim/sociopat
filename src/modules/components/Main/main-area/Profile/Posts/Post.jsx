import Icon from '../../../../Elements/Icon';
import style from './Post.module.css'

const Post = (props) => {

    return (
        <div className={style.container}>
            <Icon img={props.img} />
            <p className={style.post__body}>
                {props.body}
            </p>
        </div>
    )
};

export default Post;