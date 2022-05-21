import Icon from '../../../../Elements/Icon'
import camera from '../../../../../../assets/imgs/posts//camera-photo.svg'
import style from './Send-Post.module.css'
import arrowup from '../../../../../../assets/imgs/posts/arrow-up.svg'
import RedButton from '../../../../Elements/Button/Red-Button';
import './Send-Post.css'
import FooterSendPost from './Footer-send-Post/Footer-Send-Post.jsx';
const InputSendPost = ({ input, meta, ...props }) => {
    let height = 40
    let displaySending = 'none'
    let displayDefault = 'block'
    let sendArea = <p>Photo/Video</p>
    if (meta.active && input.value) {
        sendArea = <img
            src={arrowup}
            alt='arrow-up' />
        height = 250
        displaySending = 'flex'
        displayDefault = 'none'
    }


    return (
        <>

            <div style={
                {
                    minHeight: height
                }}
                className={style.wrapper}>

                <div className={style.left__area}>
                    <div style={
                        {
                            display: displayDefault
                        }} className={style.icon__wrapper}>
                        <Icon user={props.user} />
                    </div>

                    <input
                        {...input}
                        {...props}

                        className={style.input}
                        placeholder='Take a shit here...'

                    />
                </div>

                <div
                    style={{
                        display: displayDefault
                    }}
                    className={style.right__area}>
                    <div className={style.camera__wrapper}>
                        <img src={camera} alt='camera' />
                        <p>Photo/Video</p>
                    </div>

                </div>
            </div>
            {/* <div  className={style.wrapper} style={{
                display: displaySending
            }}> */}
                <FooterSendPost display={displaySending} />
            {/* </div> */}



        </>
        // <>
        //     <div className={style.wrapper}>
        //         <div className={style.left__area}>
        //             <div className={style.camera__wrapper}>
        //             <img src={camera} alt='camera' />
        //             <p>Photo/Video</p>
        //             </div>

        //         </div>
        //         <div className={style.right__area}>

        //             <button className={style.sendArea}>
        //                 <RedButton border={12} name={'Post'} />
        //             </button>
        //         </div>
        //     </div>

        // </>
    )
}

export default InputSendPost