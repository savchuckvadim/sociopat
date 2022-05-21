import style from './Profile-Information.module.css'
import hero from '../../../../../../assets/imgs/Vector.png'
import WhiteButton from '../../../../Elements/Button/White-Button';
import Status from './Status/Status';
import RedButton from '../../../../Elements/Button/Red-Button';
import ProfileButtons from './Buttons/Profile-Buttons';

// import Icon from '../../../../Elements/Icon';
const ProfileInformation = (props) => {
  debugger
    
    return (
        <div className={style.wrapper}>
            {/* <div className={style.frame}> */}
                <div className={style.hero__wrapper}>
                    <img className={style.hero} src={hero} alt='hero' />
                </div>



                <div className={style.information}>
                    <div className={style.info__wrapper}>
                        <div className={style.about__wrapper}>
                          
                            <h1 className={style.name}>{props.profile.fullName}</h1>
                            <Status 
                            status={props.status}
                            getStatus={props.getStatus}
                            updateStatus={props.updateStatus}
                            />
                            {/* <p className={style.about}>My actions are not for fame, I just hate most people. */}
                                {/* I don't see anything remarkable in them. People are really stupid shit. I bring them joy by suffering to die without any slobbering "buts".</p> */}
                        </div>
                        <div className={style.statistics__wrapper}>
                            <div className={style.posts}>
                                <h3 className={style.statistics__quantity}>4</h3>
                                <p className={style.statistics__name}>Posts</p>
                            </div>

                            <div className={style.statistics__line}></div>

                            <div className={style.followers}>
                                <h3 className={style.statistics__quantity}>0</h3>
                                <p className={style.statistics__name}>Followers</p>
                            </div>

                            <div className={style.statistics__line}></div>

                            <div className={style.following}>
                                <h3 className={style.statistics__quantity}>0</h3>
                                <p className={style.statistics__name}>Following</p>
                            </div>
                        </div>
                        <div className={style.buttons__wrapper}>
                           <ProfileButtons userId={props.params.userId} />
                            {/* <RedButton name={'Edit profile'}/> */}
                        </div>

                    </div>
                </div>




                <div className={style.avatar}>
                    <h1 className={style.initials}>NF</h1>
                    {/* <Icon user={props.user} /> */}
                </div>
            {/* </div> */}
        </div>

    )
};

export default ProfileInformation