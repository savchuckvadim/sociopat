import React from 'react'
import style from './Send-Post.module.css'
import { reduxForm, Field, reset } from 'redux-form'
import InputSendPost from './Send-Post-Form-Controls'
import { LightLoadingPageContainer } from '../../../../Elements/Loading/Light-Loading-Page-Container'

export const SendPost = (props) => {

    const submit = (values, dispatch) => {

        // props.send(values.sendPost)
        props.sendPost(props.user.id, props.visitedUser.id, values.sendPost, null)

        dispatch(reset('sendPost'))

    }

    return (
        !props.isPostSending
            ? <SendPostFormReduxForm onSubmit={submit} user={props.user} />
            : <div className={style.framePreloader}
            >
                <LightLoadingPageContainer />
            </div>
    )
}
let SendPostForm = (props) => {

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