import style from './Send-Message-Form.module.css'

import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import InputMessage from './Input-Message'
const SendMessage = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.send__message}>
            <Field
   
                // className={style.current__message}
                component={InputMessage}
                name="message"
                placeholder='Message...'
            />
         

        </form>
    )
}

const SendMessageReduxForm = reduxForm({ form: 'sendMessage' })(SendMessage)
export default SendMessageReduxForm