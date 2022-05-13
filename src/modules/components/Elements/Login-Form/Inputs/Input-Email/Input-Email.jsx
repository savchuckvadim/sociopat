import '../Input.css';
import React from 'react';

const InputEmail = ({ input, meta, ...props }) => {
    let index = 0

    let iconClasses = ['icon', 'iconRed']
    let containerClasses = ['container', 'containerFocus']
    
    let error = null
    if (meta.active) {
        index = 1
        console.log(meta)
    }
    if (meta.error && meta.touched && !meta.active ) {
        console.log(meta.error)
        error = meta.error
    }
    let iconClass = iconClasses[index]
    let containerClass = containerClasses[index]

    const icon = <svg className={iconClass} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
            <path d="M17 21H12V21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V13.5C21 14.8807 19.8807 16 18.5 16C17.1193 16 16 14.8807 16 13.5V12C16 9.79086 14.2091 8 12 8V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    </svg>


    return (
        <>
            <div className={containerClass}>
                {icon}

                <input
                    {...input}
                    {...meta}
                    key={'emailInput'}
                    className='input'
                    name={'email'}
                    placeholder={props.placeholder} />
                <span className='error'>{error}</span>
            </div>

        </>
    )
}

export default InputEmail