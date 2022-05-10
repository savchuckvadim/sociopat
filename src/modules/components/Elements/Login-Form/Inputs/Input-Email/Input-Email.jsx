import '../Input.css';
import React from 'react';
import { Field } from 'redux-form'
const InputEmail = (props) => {
    const refEmail = React.createRef()

    const icon = <svg className={props.iconClass} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
            <path d="M17 21H12V21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V13.5C21 14.8807 19.8807 16 18.5 16C17.1193 16 16 14.8807 16 13.5V12C16 9.79086 14.2091 8 12 8V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>


    return (

        <div className={props.containerClass}>
            {icon}

            <Field
                component={'input'}
                key={props.title}
                ref={refEmail}
                onFocus={props.changeClass}
                onBlur={props.changeClass}
                onChange={() => { props.changeValue(refEmail.current.value) }}
                className='input'
                type="e-mail"
                name={props.title}
                value={props.value}
                placeholder={props.title} />
        </div>
    )
}

export default InputEmail