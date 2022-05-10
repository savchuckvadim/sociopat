import '../Input.css';
import React from 'react';
import { Field } from 'redux-form'

const InputRepeatPass = (props) => {
    const refRepeatPass = React.createRef()

    const icon = <svg className={props.iconClass} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
            <path d="M8 10V7C8 4.791 9.791 3 12 3C14.209 3 16 4.791 16 7V10" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17 21H7C5.895 21 5 20.105 5 19V12C5 10.895 5.895 10 7 10H17C18.105 10 19 10.895 19 12V19C19 20.105 18.105 21 17 21Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>



    return (

        <div className={props.containerClass}>
            {icon}

            <Field
                component={'input'}
                key={props.title}
                ref={refRepeatPass}
                onFocus={props.changeClass}
                onBlur={props.changeClass}
                onChange={() => { props.changeValue(refRepeatPass.current.value) }}
                className='input'
                type="e-mail"
                name={props.title}
                value={props.value}
                placeholder={props.title} />
        </div>
    )
}

export default InputRepeatPass