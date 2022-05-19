import style from './Send-Post.module.css'

import React from 'react'
import { reduxForm } from 'redux-form'

import { Field } from 'redux-form'
import InputSendPost from './Send-Post-Form-Controls'

export const SendPost = (props) => {
    const submit = values => {
        props.send(values.sendPost)
    }

    return (
        <SendPostForm onSubmit={submit} />
    )
}
let SendPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.wrapper}>
           
            <Field
                component={InputSendPost}
                name='sendPost'
            />
            
        </form>
    )
}

SendPostForm = reduxForm({ form: 'sendPost' })(SendPostForm)
export default SendPost