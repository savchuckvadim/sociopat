import style from './SendPost.module.css';

const SendPost = () => {

    return (
        <div className={style.send__post}>
            <input className={style.input__post} type="text" name="" id="" />
            <input className={style.btn__post} type="button" value="add post" />
        </div>
    )
};

export default SendPost;