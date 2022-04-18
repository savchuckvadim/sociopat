import style from './Profile-Information.module.css'
import hero from '../../../../../../assets/imgs/Vector.png'
import WhiteButton from '../../../../Elements/Button/WhiteButton';
const ProfileInformation = () => {

    let heroImg = hero
    return (
        <div className={style.container}>
            <div className={style.frame}>
                <div className={style.hero__container}>
                    <img className={style.hero} src={hero} alt='hero' />
                </div>



                <div className={style.information}>
                    <div className={style.info__container}>
                        <div className={style.about__container}>
                            <h1 className={style.name}>Nmbrs Fuckoff</h1>
                            <p className={style.about}>My actions are not for fame, I just hate most people.
                                I don't see anything remarkable in them. People are really stupid shit. I bring them joy by suffering to die without any slobbering "buts".</p>
                        </div>
                        <div className={style.statistics__container}>
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
                        <div className={style.edit__container}>
                            {/* <button className={style.edit__btn} >
                                <p>Edit profile</p>
                            </button> */}
                            <WhiteButton name={'Edit profile'}/>
                        </div>

                    </div>
                </div>




                <div className={style.avatar}>
                    <h1 className={style.initials}>CW</h1>
                </div>
            </div>
        </div>

    )
};

export default ProfileInformation