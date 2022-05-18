import '../Input.css';
import React from 'react';
import getLoginRegistrationIcon from '../../../../../../../../assets/imgs/login-form/login-registartion-imgs';

const InputEmail = ({ input, meta, ...props }) => {
    let index = 0
 
    
    let containerClasses = ['container', 'containerFocus']

    let error = null
    if (meta.active || input.value) {
        index = 1
        
    }
    if (meta.error && meta.touched && !meta.active) {
      
        error = meta.error
    }

    let containerClass = containerClasses[index]
    let icon = getLoginRegistrationIcon(props.placeholder, index)



    return (
        <>
            <div className={containerClass}>
                {icon}

                <input
                    {...input}
                    {...meta}
                    key={props.placeholder}
                    className='input'

                    placeholder={props.placeholder} />
                <span className='error'>{error}</span>
            </div>

        </>
    )
}

export default InputEmail