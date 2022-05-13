import '../Input.css';
import React from 'react';
import { Field } from 'redux-form'
const InputPassword = ({ input, meta, ...props }) => {

    let index = 0

    let iconClasses = ['icon', 'iconRed']
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
    let iconClass = iconClasses[index]
    let containerClass = containerClasses[index]

    const icon = <svg className={iconClass} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
            <path d="M8 10V7C8 4.791 9.791 3 12 3C14.209 3 16 4.791 16 7V10" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 21H7C5.895 21 5 20.105 5 19V12C5 10.895 5.895 10 7 10H17C18.105 10 19 10.895 19 12V19C19 20.105 18.105 21 17 21Z" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    </svg>



    return (

        <div className={containerClass}>
            {icon}
            <input
                {...input}
                {...meta}
                key={'passwordInput'}
                className='input'
                name={'email'}
                placeholder={'E-mail'} />
            <span className='error'>{error}</span>

        </div>
    )
}

export default InputPassword