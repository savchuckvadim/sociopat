import style from './Current-Dilogs-Card.module.css'
import arrow from '../../../../../../assets/imgs/dialogs/arrow.svg'
import noMessage from '../../../../../../assets/imgs/dialogs/no-messages.svg'

import { useNavigate } from 'react-router-dom';
import SendMessageReduxForm from './Send-Message-Form'

const CurrentDialogsCard = (props) => {
    const navigate = useNavigate();

    const submit = (values) => {
        console.log(values)
    }
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


            <SendMessageReduxForm onSubmit={submit}/>

        </div>
    )
}

export default CurrentDialogsCard