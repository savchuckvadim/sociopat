import '../Input.css';
import React from 'react';

const InputSurname = (props) => {
    const refSurname = React.createRef()
    const icon = <svg className={props.iconClass} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="1">
            <path d="M14.4749 4.52513C15.8417 5.89197 15.8417 8.10804 14.4749 9.47488C13.1081 10.8417 10.892 10.8417 9.52515 9.47488C8.15831 8.10804 8.15831 5.89197 9.52515 4.52513C10.892 3.15829 13.1081 3.15829 14.4749 4.52513Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 18.5V19.5C4 20.052 4.448 20.5 5 20.5H19C19.552 20.5 20 20.052 20 19.5V18.5C20 15.474 16.048 13.508 12 13.508C7.952 13.508 4 15.474 4 18.5Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>
 
    return (

        <div className={props.containerClass}>
           {icon}
            <input 
            key={props.title}
            ref={refSurname}
            onFocus={props.changeClass} 
            onBlur={props.changeClass} 
            onChange={()=> {props.changeValue(refSurname.current.value)}} 
            className='input' 
            type="text" 
            name={props.title} 
            value={props.value} 
            placeholder={props.title}  />
        </div>
    )
}

export default InputSurname