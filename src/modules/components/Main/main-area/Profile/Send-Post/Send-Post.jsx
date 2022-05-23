import style from './Send-Post.module.css'

import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import InputSendPost from './Send-Post-Form-Controls'

export const SendPost = (props) => {
    const submit = (values, dispatch) => {
       
        props.send(values.sendPost)
        
        dispatch(reset('sendPost'))
       
    }
    
    return (
        <SendPostFormReduxForm  onSubmit={submit} />
    )
}
let SendPostForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} className={style.frame}>
           

            <Field
                component={InputSendPost}
                name='sendPost'
            />
            
        </form>
    )
}

const SendPostFormReduxForm = reduxForm({ form: 'sendPost' })(SendPostForm)
export default SendPost