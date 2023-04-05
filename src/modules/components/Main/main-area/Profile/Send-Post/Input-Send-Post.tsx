import Avatar from '../../../../Elements/Avatar/Avatar'
import camera from '../../../../../../assets/imgs/posts/camera-photo.svg'
import style from './Send-Post.module.css'
import FooterSendPost from './Footer-send-Post/Footer-Send-Post'
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form'
import { UserType } from '../../../../../types/types'

type InputSendPostPropsType = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    user: UserType
}

const InputSendPost: React.FC<InputSendPostPropsType> = ({ input, meta, ...props }) => {
    let height = 40 as number | string
    let displaySending = 'none' as 'none' | 'flex'
    let displayDefault = 'block'
    let textHeight = '5px'
    let textResize = 'none' as 'none' | 'vertical'
    let textClass = style.input
    let cameraOpacity = 50


    let leftAreaClass = style.left__area
    if (meta.active || input.value) {

        height = '100%'
        displaySending = 'flex'
        displayDefault = 'none'
        textHeight = '50px'
        textResize = 'vertical'
        textClass = style.inputActive
        leftAreaClass = style.left__areaActive
        cameraOpacity = 0

    }

    return (
        <>

            <div className={style.wrapper}
                style={{ minHeight: height }}>
                <div className={leftAreaClass}>
                    <div className={style.icon__wrapper}>
                        <Avatar size={40} user={props.user} />
                    </div>

                    <textarea
                        className={textClass}
                        {...input}
                        {...props}
                        style={{ height: textHeight, resize: textResize }}
                        placeholder='Take a shit here...'
                        rows={1}
                    />
                </div>

                <div className={style.right__area}
                    style={{ display: displayDefault, opacity: cameraOpacity }}>

                    <div className={style.camera__wrapper}>
                        <img src={camera} alt='camera' />
                        <p>Photo/Video</p>
                    </div>

                </div>
            </div>
            <FooterSendPost input={input}
                {...props} display={displaySending} />
        </>

    )
}

export default InputSendPost