import '../Input.css';
import React from 'react';
import { Field } from 'redux-form'
import getLoginRegistrationIcon from '../../../../../../assets/imgs/login-form/login-registartion-imgs';
const InputPassword = ({ input, meta, ...props }) => {

    let index = 0
 
    
    let containerClasses = ['container', 'containerFocus']

    let error = null
    if (meta.active || input.value) {
        index = 1
        
    }
  

    let containerClass = containerClasses[index]
    let icon = getLoginRegistrationIcon(props.placeholder, index)


    return (

        <div className={containerClass}>
            {icon}
            <input
                {...input}
                {...meta}  
                type='password'      
                className='input'
                placeholder={props.placeholder} />
            <span className='error'>{error}</span>

        </div>
    )
}

export default InputPassword