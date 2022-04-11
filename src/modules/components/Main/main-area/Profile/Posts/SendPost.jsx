import style from './SendPost.module.css';

const SendPost = (props) => {

    return (
        <div className={style.send__post}>
            <input 
            className={style.input__post} 
            type="text" 
            name="" 
            id="" 
            value={props.value} 
            onChange={(e) => props.changeCurrentPost(e.target.value)} />
            <input className={style.btn__post} type="button" value="add post" />
        </div>
    )
};

export default SendPost;