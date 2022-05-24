import RedButton from '../../../../../Elements/Button/Red-Button'
import style from './Modal-Edit-Profile.module.css'

const ModalEditProfile = ({ active, setModalActive }) => {
    
let modalClass = style.modal
active 
? modalClass = style.modalActive
: modalClass = style.modal

    return (
        <div className={modalClass} onClick={() => { setModalActive(false) }}>
            <div className={style.modalcard}>
                <h1 className={style.title}>Настройки Аккаунта</h1>
                <div className={style.buttonWrapper}>
                    <RedButton border={12} name='вернуться' />
                </div>

            </div>

        </div>
    )

}

export default ModalEditProfile