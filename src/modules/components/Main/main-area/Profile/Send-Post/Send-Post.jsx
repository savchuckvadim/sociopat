import style from './Send-Post.module.css'

import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import InputSendPost from './Send-Post-Form-Controls'

export const SendPost = (props) => {
    debugger
    const submit = (values, dispatch) => {
       
        props.send(values.sendPost)
        
        dispatch(reset('sendPost'))
       
    }
    
    return (
        <SendPostFormReduxForm  onSubmit={submit} user={props.user} />
    )
}
let SendPostForm = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit} className={style.frame}>
           

            <Field
                component={InputSendPost}
                name='sendPost'
                user={props.user}
            />
            
        </form>
    )
}

const SendPostFormReduxForm = reduxForm({ form: 'sendPost' })(SendPostForm)
export default SendPost