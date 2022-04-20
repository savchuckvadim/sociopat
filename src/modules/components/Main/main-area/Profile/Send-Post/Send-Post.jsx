import style from './Send-Post.module.css'
import Icon from '../../../../Elements/Icon'
import camera from '../../../../../../assets/imgs/posts/camera-photo.svg'
import arrowup from '../../../../../../assets/imgs/posts/arrow-up.svg'
import React from 'react'


const SendPost = (props) => {
    const ref = React.createRef()
    let sendArea = <p>Photo/Video</p>
    if (props.value) {
        sendArea = <img
        onClick={()=>{props.send(props.value)}}
         src={arrowup} 
         alt='arrow-up'/> 
    }
    
    return (
        <div className={style.container}>
            <Icon user={props.user} />
            <input
            ref={ref}
                className={style.input}
                placeholder='Take a shit here...'
                type="text"
                value={props.value}
                onChange={() => {props.change(ref.current.value)}}
            />
            <img src={camera}></img>
            <div className={style.sendArea}>
            {sendArea}
            </div>
            
        </div>
    )
}

export default SendPost