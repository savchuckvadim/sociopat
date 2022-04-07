import style from './NewMessageSendArea.module.css'


const NewMessageSendArea = () => {

    return (
        <div className={style.new__message}>
            <input type="text" placeholder='Введите сообщение...' className={style.current__input} />
            <div className={style.current__btn}>
           
            </div>
        </div>
    )
};

export default NewMessageSendArea;