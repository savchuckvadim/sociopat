import style from './Current-Dilogs-Card.module.css'
import arrow from '../../../../../../assets/imgs/dialogs/arrow.svg'
import noMessage from '../../../../../../assets/imgs/dialogs/no-messages.svg'
import camera from '../../../../../../assets/imgs/dialogs/camera-photo.svg'
import arrowUp from '../../../../../../assets/imgs/dialogs/arrow-up.svg'
import Icon from '../../../../Elements/Icon'
import { useNavigate } from 'react-router-dom';

const CurrentDialogsCard = (props) => {
    const navigate = useNavigate();

    return (
        <div className={style.container}>
            <div className={style.header}>
                <img
                    className={style.arrow}
                    onClick={() => { navigate(-1) }}
                    src={arrow}
                    alt="arrow" />
                <div className={style.icon__container}>
                    {/* <Icon users={props.users} /> */}
                </div>
                <div className={style.user__information}>
                    <h3 className={style.username}>User Name</h3>
                    <p className={style.last__visit}>last seen 3 hour ago</p>
                </div>
            </div>
            <div className={style.messages}>
                <img className={style.nomessages} src={noMessage} alt="no-messages-icon" />
            </div>
            <div className={style.send__message}>
                <input
                    className={style.current__message}
                    type="text"
                    name=""
                    id=""
                    placeholder='Message...'
                />
                <div className={style.send__icon}>
                    <img className={style.camera} src={camera} alt="camera-icon" />
                    {/* <img className={style.arrowup} src={arrowUp} alt="arrow-up-icon" /> */}

                </div>

            </div>

        </div>
    )
}

export default CurrentDialogsCard