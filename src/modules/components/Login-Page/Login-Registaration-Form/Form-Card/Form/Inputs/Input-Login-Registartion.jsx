import style from './Input.module.css';
import React from 'react';
import getLoginRegistrationIcon from '../../../../../../../assets/imgs/login-form/login-registartion-imgs';

 const Input = (field) => {

    let index = 0
    let containerClasses = [style.container, style.containerFocus]
    let error = null

    if (field.meta.active || field.input.value) {
        index = 1
    }
   
    if (field.meta.error && field.meta.touched && !field.meta.active) {
        error = <span className='error'>{field.meta.error}</span>
    }

    let containerClass = containerClasses[index]
    let icon = getLoginRegistrationIcon(field.placeholder, index)

    return (
        <>
            <div className={containerClass}>
                {icon}

                <input
                    {...field.input}
                    key={field.placeholder}
                    className={style.input}
                    type={`${field.type}`}
                    placeholder={field.placeholder} />
                {error}
            </div>

        </>
    )

}


export default Input