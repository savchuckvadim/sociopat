
import { ProfileBaseContainer } from './Profile-Base/Profile-Base-Container';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.profile__container}>
            <div className={style.profile__hero}></div>
            <div className={style.profile__base}>
                <ProfileBaseContainer />
            </div>

        </div>

    )
};






export default Profile;