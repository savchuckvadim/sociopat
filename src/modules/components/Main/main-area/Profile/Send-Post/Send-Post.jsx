import React from 'react'
import style from './Send-Post.module.css'
import { reduxForm, Field, reset } from 'redux-form'
import InputSendPost from './Send-Post-Form-Controls'
import { LightLoadingPageContainer } from '../../../../Elements/Loading/Light-Loading-Page-Container'
import LoadingPage from '../../../../Elements/Loading/Loading-Page'

export const SendPost = (props) => {

    const submit = (values, dispatch) => {

        // props.send(values.sendPost)
        props.sendPost(props.user.id, props.visitedUser.id, values.sendPost, null)

        dispatch(reset('sendPost'))

    }

    return (
        <SendPostFormReduxForm isPostSending={props.isPostSending} onSubmit={submit} user={props.user} />

    )
}
let SendPostForm = (props) => {

    return (<form onSubmit={props.handleSubmit} className={style.frame}>
        {!props.isPostSending
            ? <Field
                component={InputSendPost}
                name='sendPost'
                user={props.user}
            />

            : <div className={style.framePreloader}>
                <LoadingPage isComponent={true} />
            </div>}
    </form>


    )
}

const SendPostFormReduxForm = reduxForm({ form: 'sendPost' })(SendPostForm)
export default SendPost