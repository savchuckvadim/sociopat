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
            <input 
            key='input-send-post-btn'
            className={style.btn__post} 
            type="button" 
            value="add post" 
            onClick={()=>{props.addPost(props.value)}}/>
        </div>
    )
};

export default SendPost;