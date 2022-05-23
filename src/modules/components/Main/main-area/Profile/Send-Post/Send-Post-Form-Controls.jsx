import Icon from '../../../../Elements/Icon'
import camera from '../../../../../../assets/imgs/posts//camera-photo.svg'
import style from './Send-Post.module.css'
import arrowup from '../../../../../../assets/imgs/posts/arrow-up.svg'
import FooterSendPost from './Footer-send-Post/Footer-Send-Post.jsx';
const InputSendPost = ({ input, meta, ...props }) => {
    let height = 40
    let displaySending = 'none'
    let displayDefault = 'block'
    let textHeight = '5px'
    let textCols = 5
    let textResize = 'none'
    let textClass = style.input
    let sendArea = <p>Photo/Video</p>

    let leftAreaClass = style.left__area
    if (meta.active || input.value) {
        sendArea = <img
            src={arrowup}
            alt='arrow-up' />
        height = '100%'
        displaySending = 'flex'
        displayDefault = 'none'
        textHeight = '50px'
        textCols = 55
        textResize = 'vertical'
        textClass = style.inputActive
        leftAreaClass = style.left__areaActive
    }
  
    return (
        <>

            <div className={style.wrapper} style={
                {
                    minHeight: height
                }}
            >

                <div className={leftAreaClass}
                   
                >
                    <div style={
                        {
                            // display: displayDefault
                        }} className={style.icon__wrapper}>
                        <Icon user={props.user} />
                    </div>

                    <textarea className={textClass}
                        {...input}
                        {...props}
                        style={{
                            height: textHeight,
                            resize: textResize
                        }}

                        placeholder='Take a shit here...'
                        // cols={textCols}
                        rows={'1'}
                    />
                </div>

                <div className={style.right__area}
                    style={{
                        display: displayDefault
                    }}
                >
                    <div className={style.camera__wrapper}>
                        <img src={camera} alt='camera' />
                        <p>Photo/Video</p>
                    </div>

                </div>
            </div>

            <FooterSendPost {...input}
                        {...props}  display={displaySending} />




        </>

    )
}

export default InputSendPost