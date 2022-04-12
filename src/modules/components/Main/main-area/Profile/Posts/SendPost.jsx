import Button from '../../../../Elements/Button';
import style from './SendPost.module.css';

const SendPost = (props) => {

    return (
        <div className={style.send__post}>
            <input 
            key='input-send-post'
            className={style.input__post} 
            type="text" 
            value={props.value} 
            onChange={(e) => props.changeCurrentPost(e.target.value)} />
    
            <Button nameOfButton={props.nameOfButton} onClick={() => { props.addPost(props.value) }} />
        </div>
    )
};

export default SendPost;