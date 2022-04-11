import Icon from '../../../../Elements/Icon';
import style from './Profile-Base.module.css'


const ProfileBase = (props) => {

    return (
        <div className={style.wrapper} >
            <div className={style.header}>
                <Icon img={props.state.img}/>
                <div className={style.aboutMe}>
                    {props.state.aboutMe}
                </div>
            </div>
            <div className={style.main}>

            </div>
        </div>
    )
}

export default ProfileBase;