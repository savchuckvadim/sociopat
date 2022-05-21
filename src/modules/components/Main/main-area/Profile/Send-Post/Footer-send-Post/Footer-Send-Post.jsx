import RedButton from "../../../../../Elements/Button/Red-Button"
import camera from '../../../../../../../assets/imgs/posts//camera-photo.svg'
import style from '../Send-Post.module.css'
import footer from './Footer-Send-Post.module.css'
const FooterSendPost = (props) => {
    let height = 0
    let opacity = 0
    let opacityCamera = 0

    if (props.display !== 'none') {
        height = 40
        opacity = 100
        opacityCamera = 50
    }
    
    return (
        <div
            style={
                {
                    // display: props.display,
                    height: height
                }}
            className={footer.footer__wrapper}
        >

            <div
                style={
                    {

                        height: height
                    }}
                className={style.left__area}>
                <div

                    className={style.camera__wrapper}>
                    <img style={
                        {
                            opacity: opacityCamera,
                            // height: height
                        }} className={footer.camera__img} src={camera} alt='camera' />
                    <p style={
                        {
                            opacity: opacityCamera,
                            // height: height
                        }} className={footer.camera__text}>Photo/Video</p>
                </div>

            </div>
            <div className={footer.middle}></div>
            <div
                style={
                    {
                        opacity: opacity,
                        height: height
                    }}
                className={style.right__area}>

                <button className={style.sendArea}>
                    <RedButton border={12} name={'Post'} />
                </button>
            </div>
        </div>
    )
}

export default FooterSendPost