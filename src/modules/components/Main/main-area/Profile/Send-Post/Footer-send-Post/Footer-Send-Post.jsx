import RedButton from "../../../../../Elements/Button/Red-Button"
import camera from '../../../../../../../assets/imgs/posts//camera-photo.svg'
import style from '../Send-Post.module.css'
import footer from './Footer-Send-Post.module.css'
const FooterSendPost = (props) => {
    let height = 0
    let heightCamera = 0
    let opacity = 0
    let opacityCamera = 0
    let margin = 0
    let cameraClass = footer.cameraActive
    let sendAreaClass = footer.sendAreaActive
    if (props.display !== 'none') {
        height = 40
        heightCamera = 24
        opacity = 100
        opacityCamera = '50%'
        margin = 16
        cameraClass = footer.camera
        sendAreaClass = footer.sendArea
    }

    return (
        <div
            style={
                {
                    // display: props.display,
                    height: height,
                    margin: margin
                }}
            className={footer.footer__wrapper}
        >

            <div className={style.left__area}
                style={
                    {
                        height: height
                    }}
                >
                <div

                    className={style.camera__wrapper}>
                    <img style={
                        {
                            // opacity: opacityCamera,
                            height: heightCamera
                        }} className={cameraClass} src={camera} alt='camera' />
                    <p style={
                        {
                            opacity: opacityCamera,
                            height: heightCamera
                        }} className={cameraClass}>Photo/Video</p>
                </div>

            </div>
           
            <div className={style.right__area}
                style={
                    {
                        opacity: opacity,
                        height: height
                    }}
                >

                <div
                    style={
                        {
                            opacity:opacity,
                            height: height
                        }}
                    className={sendAreaClass}>
                    <RedButton className={cameraClass}  border={12} name={'Post'} />
                </div>
            </div>
        </div>
    )
}

export default FooterSendPost