import Icon from '../../../../Elements/Icon'
import camera from '../../../../../../assets/imgs/posts//camera-photo.svg'
import style from './Send-Post.module.css'
import arrowup from '../../../../../../assets/imgs/posts/arrow-up.svg'
const InputSendPost = ({ input, meta, ...props }) => {
    let sendArea = <p>Photo/Video</p>
    if (meta.active && input.value ) {
        sendArea = <img

            src={arrowup}
            alt='arrow-up' />
    }

    console.log(input)
    return (
        <>
            <div className={style.left__area}>
                <Icon user={props.user} />
                <input
                    {...input}
                    {...props}

                    className={style.input}
                    placeholder='Take a shit here...'

                />
            </div>
            <div className={style.right__area}>
                <img src={camera} alt='camera' />
                <button className={style.sendArea}>
                    {sendArea}
                </button>
            </div>
        </>
    )
}

export default InputSendPost