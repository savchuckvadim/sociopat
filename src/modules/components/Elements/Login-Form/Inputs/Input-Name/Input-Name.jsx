import '../Input.css';
import React from 'react';
import { Field } from 'redux-form'
const InputName = ({ input, meta, ...props }) => {

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
        <g opacity="1">
            <path d="M14.4749 4.52513C15.8417 5.89197 15.8417 8.10804 14.4749 9.47488C13.1081 10.8417 10.892 10.8417 9.52515 9.47488C8.15831 8.10804 8.15831 5.89197 9.52515 4.52513C10.892 3.15829 13.1081 3.15829 14.4749 4.52513Z" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 18.5V19.5C4 20.052 4.448 20.5 5 20.5H19C19.552 20.5 20 20.052 20 19.5V18.5C20 15.474 16.048 13.508 12 13.508C7.952 13.508 4 15.474 4 18.5Z" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    </svg>

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