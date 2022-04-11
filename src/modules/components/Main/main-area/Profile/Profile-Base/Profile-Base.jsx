import Icon from '../../../../Elements/Icon';
import style from './Profile-Base.module.css'
import { SendPostContainer } from '../Posts/SendPost-Container';
import { PostsContainer } from '../Posts/Posts-Container';


const ProfileBase = (props) => {

    return (
        <div className={style.wrapper} >
            <div className={style.header}>
                <h2 className={style.login__title}>
                    {props.state.login}
                </h2>
                <div className={style.aboutContainer}>
                    <Icon img={props.state.img} />
                    <div className={style.aboutMe}>
                        {props.state.aboutMe}
                    </div>
                </div>

            </div>
            <div className={style.posts__area}>
                <h3 className={style.post__title}>My Posts</h3>
                <SendPostContainer/>
                <PostsContainer/>
            </div>
        </div>
    )
}

export default ProfileBase;