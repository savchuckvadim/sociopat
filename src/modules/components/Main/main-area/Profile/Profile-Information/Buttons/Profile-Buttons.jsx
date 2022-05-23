import { useState } from 'react';
import RedButton from '../../../../../Elements/Button/Red-Button';
import WhiteButton from '../../../../../Elements/Button/White-Button';
import ModalEditProfile from '../Modal-Edit-Profile/Modal-Edit-Profile';
import style from './Profile-Buttons.module.css'
const ProfileButtons = (props) => {
    let [modalActive, setModalActive] = useState(false)
    if (props.userId) {
        return (
            <div className={style.twoButtons}>
                <div className={style.button__wrapper}>
                    <RedButton
                        border={12}
                        name={'Follow'}
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