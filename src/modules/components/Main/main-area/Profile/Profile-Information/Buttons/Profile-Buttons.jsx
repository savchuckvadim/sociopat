import WhiteButton from '../../../../../Elements/Button/White-Button'
import style from './Profile-Buttons.module.css'
import FollowUnfollowButtonsContainer from '../../../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons-Container'
import Button from '../../../../../Elements/Button/Button'

const ProfileButtons = (props) => {

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
                    <Button
                        color={'grey'}
                        border={12}
                        grey={true}
                        name={'Send Message'}
                    />
                </div>


            </div>
        )
    } else {
        return (<>

            <Button
                color={'grey'}
                border={12}
                name={'Edit profile'}
            />
            {/* <ModalEditProfile active={modalActive} setModalActive={setModalActive}/> */}

        </>
        )
    }

}

export default ProfileButtons