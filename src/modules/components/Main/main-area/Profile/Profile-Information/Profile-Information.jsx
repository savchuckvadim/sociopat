import style from './Profile-Information.module.css'
import hero from '../../../../../../assets/imgs/Vector.png'

import ProfileButtons from './Buttons/Profile-Buttons';
import ProfileStatus from './Status/Profile-Status';
import ProfileStatistics from './Statistics/Profile-Statistics';

const ProfileInformation = (props) => {
  
    
    return (
        <div className={style.wrapper}>
           
                <div className={style.hero__wrapper}>
                    <img className={style.hero} src={hero} alt='hero' />
                </div>



                <div className={style.information}>
                    <div className={style.info__wrapper}>
                        <div className={style.about__wrapper}>
                          
                            <h1 className={style.name}>{props.profile.fullName}</h1>
                            <ProfileStatus 
                            status={props.status}
                            getStatus={props.getStatus}
                            updateStatus={props.updateStatus}
                            isCurrentUser={props.isCurrentUser}
                            />
                        </div>
                        <ProfileStatistics/>
           
                        <div className={style.buttons__wrapper}>
                           <ProfileButtons userId={props.params.userId} />
                        </div>

                    </div>
                </div>




                <div className={style.avatar}>
                    <h1 className={style.initials}>NF</h1>
                    {/* <Icon user={props.user} /> */}
                </div>
          
        </div>

    )
};

export default ProfileInformation