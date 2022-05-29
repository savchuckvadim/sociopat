import { useState } from 'react';
import WhiteButton from '../../../../../Elements/Button/White-Button';
import ModalEditProfile from '../Modal-Edit-Profile/Modal-Edit-Profile';
import style from './Profile-Buttons.module.css'
import FollowUnfollowButtonsContainer from '../../../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons-Container'

const ProfileButtons = (props) => {

    
    let [modalActive, setModalActive] = useState(false)
    // let disable = props.followingInProgress.some(id => id === props.user.id)

    if (props.userId && props.visitedUser) {
        return (
            <div className={style.twoButtons}>
                <div className={style.button__wrapper}>
                <FollowUnfollowButtonsContainer
                user={props.visitedUser}
                />
                </div>
                
                <div className={style.button__wrapper}>
                    <WhiteButton
                        border={12}
                        grey={true}
                        name={'Send Message'}
                    />
                </div>


            </div>
        )
    } else {
        return (<>
            <WhiteButton grey={true} onClick={() => {setModalActive(true)}} border={12} name={'Edit profile'} />
            <ModalEditProfile active={modalActive} setModalActive={setModalActive}/>
            </>
        )
    }

}

export default ProfileButtons