import style from './Send-Message-Form.module.css'
import camera from '../../../../../../../assets/imgs/dialogs/camera-photo.svg'
import arrowUp from '../../../../../../../assets/imgs/dialogs/arrow-up.svg'
const InputMessage = ({ input, meta, ...props }) => {
 
    let height = 25
    let minheight = 25
    let sendIconJustify = 'end'
    let arrowDisplay = 'none'

    if (meta.active || input.value.length > 0) {
        height = input.value.length / 3.1
        minheight = 50
        sendIconJustify = 'space-between'
        arrowDisplay = 'block'
    }

    return (<>
        <textarea
            {...input}

            className={style.current__message}
            style={{
                resize: 'none',
                height: height,
                minHeight: minheight
            }}
            placeholder={props.placeholder}
        >
        </textarea>
        <div className={style.send__icon}
        style={{
            justifyContent: sendIconJustify
        }}
        >
            <img className={style.camera} src={camera} alt="camera-icon" />
            <button
            type='submit'
            style={{
                display:arrowDisplay
            }}>
                <img className={style.arrowup} src={arrowUp} alt="arrow-up-icon" />
            </button>

        </div>
    </>
    )
}

export default InputMessage