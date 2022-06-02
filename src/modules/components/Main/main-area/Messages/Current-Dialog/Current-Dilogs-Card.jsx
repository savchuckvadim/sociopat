import style from './Current-Dilogs-Card.module.css'
import arrow from '../../../../../../assets/imgs/dialogs/arrow.svg'

import { useNavigate } from 'react-router-dom';
import SendMessageReduxForm from './Send-Message-Form/Send-Message-Form'
import Author from '../../../../Elements/Author/Author';
import { reset } from 'redux-form'
import BodyOfCurrentDialog from './Current-Dialog-Body/Current-Dialog-Body';
const CurrentDialogsCard = (props) => {
    const navigate = useNavigate();

    const submit = (values, dispatch) => {

        // props.sendNewMessage(values)
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
                    <Author 
                    userName={props.dialog.nameOfDialog} 
                    size={46} 
                    userId={props.dialog.userId}
                    />
                </div>

            </div>
            
            <BodyOfCurrentDialog {...props} />
          


            <SendMessageReduxForm onSubmit={submit} />

        </div>
    )
}

export default CurrentDialogsCard