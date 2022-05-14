import '../Input.css';
import React from 'react';
import { Field } from 'redux-form'
import getLoginRegistrationIcon from '../../../../../../assets/imgs/login-form/login-registartion-imgs';
const InputName = ({ input, meta, ...props }) => {

    let index = 0

    
    let containerClasses = ['container', 'containerFocus']

    let error = null
    if (meta.active) {
        index = 1
        console.log(meta)
    }
    if (meta.error && meta.touched && !meta.active) {
        console.log(meta.error)
        error = meta.error
    }

    let containerClass = containerClasses[index]
    let icon = getLoginRegistrationIcon (props.placeholder, index)

    return (

        <div className={containerClass}>
            {icon}

            <input
                {...input}
                {...meta}
                className='input'
                placeholder={props.placeholder} />
            <span className='error'>{error}</span>
        </div>
    )
}

export default InputName