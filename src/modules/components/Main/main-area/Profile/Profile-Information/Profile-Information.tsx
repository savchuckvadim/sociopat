import style from './Profile-Information.module.css'
import hero from '../../../../../../assets/imgs/Vector.png'
import ProfileButtons from './Buttons/Profile-Buttons'
import AboutMe from './AboutMe/About-Me'
import ProfileStatistics from './Statistics/Profile-Statistics'
import Avatar from '../../../../Elements/Avatar/Avatar'
import UploadAvatar from './UploadAvatar/UploadAvatar'
import React from 'react'
import { ParamsType, ProfilePropsType } from '../Profile-Container'
import { UserType } from '../../../../../types/types'
import { LightLoadingPageContainer } from '../../../../Elements/Loading/Light-Loading-Page-Container'
type ProfileInformationPropsType = {
    visitedUser: UserType,
    params: ParamsType,
    updateAboutMe: (aboutMe: string) => void
}
const ProfileInformation: React.FC<ProfilePropsType> = (props) => {

    if (props.visitedUser !== null) {
        const visitedUser = props.visitedUser
        return (
            <div className={style.wrapper}>

                <div className={style.hero__wrapper}>
                    <img className={style.hero} src={hero} alt='hero' />
                </div>

                <div className={style.information}>
                    <div className={style.info__wrapper}>
                        <div className={style.about__wrapper}>

                            <h1 className={style.name}>{`${visitedUser.profile.name} ${visitedUser.profile.surname}`}</h1>

                            <AboutMe
                                aboutMe={visitedUser.profile.about_me}
                                updateAboutMe={props.updateAboutMe}
                                isCurrentUser={visitedUser.isAuthUser}
                            />
                        </div>
                        <ProfileStatistics
                            followers={visitedUser.followers}
                            followeds={visitedUser.followeds}
                            postsCount={visitedUser.postsCount}
                        />

                        <div className={style.buttons__wrapper}>
                            <ProfileButtons
                                userId={props.params.userId}
                                visitedUser={visitedUser}
                            //TODO: loadPhoto={props.loadPhoto}

                            //current user for set in users->user->folowwers.push() andvisitedUser->followers.push() in profile and user reducer
                            />
                        </div>

                    </div>
                </div>


                <div className={style.avatar}>
                    <Avatar
                        size={128}
                        border={true}
                        img={visitedUser.profile.avatar}
                        user={visitedUser}
                    />

                </div>

                {/*  //TODO : {isCurrentUser && <UploadAvatar loadPhoto={loadPhoto} />} */}


            </div>

        )
    } else {
        return <LightLoadingPageContainer />
    }

}

export default ProfileInformation