import style from './Profile-Information.module.css'
import hero from '../../../../../../assets/imgs/Vector.png'

import ProfileButtons from './Buttons/Profile-Buttons';
import ProfileStatus from './Status/Profile-Status';
import ProfileStatistics from './Statistics/Profile-Statistics';
import Avatar from '../../../../Elements/Avatar/Avatar';
import UploadAvatar from './UploadAvatar/UploadAvatar';

const ProfileInformation = (props) => {
    
    
   
    return (
        <div className={style.wrapper}>

            <div className={style.hero__wrapper}>
                <img className={style.hero} src={hero} alt='hero' />
            </div>



            <div className={style.information}>
                <div className={style.info__wrapper}>
                    <div className={style.about__wrapper}>

                        <h1 className={style.name}>{`${props.visitedUser.profile.name} ${props.visitedUser.profile.surname}`}</h1>

                        <ProfileStatus
                            status={props.status}
                            getStatus={props.getStatus}
                            updateStatus={props.updateStatus}
                            isCurrentUser={props.isCurrentUser}
                        />
                    </div>
                    <ProfileStatistics 
                    followers={props.visitedUser.followers}
                    followeds={props.visitedUser.followeds}
                    postsCount={props.visitedUser.postsCount}
                    />

                    <div className={style.buttons__wrapper}>
                        <ProfileButtons
                            userId={props.params.userId}
                            visitedUser={props.visitedUser}
                            loadPhoto={props.loadPhoto}
                           
                            //current user for set in users->user->folowwers.push() andvisitedUser->followers.push() in profile and user reducer
                        />
                    </div>

                </div>
            </div>


            <div className={style.avatar}>
                <Avatar
                    size={128}
                    border={true}
                    // name={props.userName}
                    // img={props.profile.photos.small}   /// old API
                    // img={null} ///////////////LARAVEL
                    user={props.visitedUser}
                />

            </div>
          {props.isCurrentUser && <UploadAvatar loadPhoto={props.loadPhoto}/>}


        </div>

    )
};

export default ProfileInformation