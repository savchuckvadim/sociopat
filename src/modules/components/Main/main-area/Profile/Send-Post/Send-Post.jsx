import style from './Send-Post.module.css'
import Icon from '../../../../Elements/Icon'
// import camera from '../../../../../../assets/imgs/posts/camera-photo.svg'
import arrowup from '../../../../../../assets/imgs/posts/arrow-up.svg'
import React from 'react'
import { reduxForm } from 'redux-form'
import { values } from 'redux-form'
import { Field } from 'redux-form'

export const SendPost = (props) => {
    const submit = values => {
        console.log(values)
        props.send(values.sendPost)

    }

    return (
        <SendPostForm onSubmit={submit} />
    )
}
let SendPostForm = (props) => {
    // const ref = React.createRef()
    let sendArea = <p>Photo/Video</p>
    if (props.value) {
        sendArea = <img
            // onClick={() => { props.send(props.value) }}
            src={arrowup}
            alt='arrow-up' />
    }

    return (
        <form onSubmit={props.handleSubmit} className={style.container}>
            <div className={style.left__area}>
                <Icon user={props.user} />
                <Field
                    component={'input'}
                    name='sendPost'
                    className={style.input}
                    placeholder='Take a shit here...'
                    // type="text-area"
                    // value={props.value}
                // onChange={() => {props.change(ref.current.value)}}
                />
            </div>
            <div className={style.right__area}>
                {/* <img src={camera} alt='camera-image'/> */}
                <button className={style.sendArea}>
                    {sendArea}
                </button>
            </div>


        </form>
    )
}
SendPostForm = reduxForm({ form: 'sendPost' })(SendPostForm)
export default SendPost