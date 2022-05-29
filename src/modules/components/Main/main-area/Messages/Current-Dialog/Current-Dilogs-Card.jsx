import style from './Current-Dilogs-Card.module.css'
import arrow from '../../../../../../assets/imgs/dialogs/arrow.svg'
import noMessage from '../../../../../../assets/imgs/dialogs/no-messages.svg'
import { useNavigate } from 'react-router-dom';
import SendMessageReduxForm from './Send-Message-Form/Send-Message-Form'
import Author from '../../../../Elements/Author/Author';
import { reset } from 'redux-form'
const CurrentDialogsCard = (props) => {
    const navigate = useNavigate();

    const submit = (values, dispatch) => {
        
        props.sendNewMessage(values)
        dispatch(reset('sendMessage'))
    }
    
    return (
        <div className={style.container}>
            <div className={style.header}>
                <img
                    className={style.arrow}
                    onClick={() => { navigate(-1) }}
                    src={arrow}
                    alt="arrow" />
                    <div className={style.author}>
                    <Author userName={'Fake Name'} siz={46}/>
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