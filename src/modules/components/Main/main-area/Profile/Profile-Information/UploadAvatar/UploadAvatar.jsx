import style from './UploadAvatar.module.css'
import camera from '../../../../../../../assets/imgs/posts/camera-photo.svg'

const UploadAvatar = (props) => {
    const onFileLoad = (e) => {
       
        if(e.target.files.length){
            props.loadPhoto(e.target.files[0])
        } 
    }
    return (
        <label htmlFor="file"

        // onMouseOver={()=>{}}
        className={style.changePhoto}>
        <img className={style.camera} src={camera} alt="camera" />
        <input type='file' className={style.title__changePhoto} />
        <p className={style.title__changePhoto}> load photo</p>
        <input style={{ display: 'none' }} onChange={(e) => { onFileLoad(e) }} type="file" id="file" name="file" multiple></input>

    </label>
    )
}

export default UploadAvatar