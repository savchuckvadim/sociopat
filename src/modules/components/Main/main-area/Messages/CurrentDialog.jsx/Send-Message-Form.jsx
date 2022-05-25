import style from './Send-Message-Form.module.css'
import camera from '../../../../../../assets/imgs/dialogs/camera-photo.svg'
import arrowUp from '../../../../../../assets/imgs/dialogs/arrow-up.svg'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import InputMessage from './Input-Message'
const SendMessage = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.send__message}>
            <Field
                className={style.current__message}
                component={InputMessage}
                name="message"
                placeholder='Message...'
            />
            <div className={style.send__icon}>
                <img className={style.camera} src={camera} alt="camera-icon" />
                <button>
                    <img className={style.arrowup} src={arrowUp} alt="arrow-up-icon" />
                </button>

            </div>

        </form>
    )
}

const SendMessageReduxForm = reduxForm({ form: 'sendMessage' })(SendMessage)
export default SendMessageReduxForm