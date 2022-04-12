import Button from '../../../../Elements/Button';
import style from './NewMessageSendArea.module.css'


const NewMessageSendArea = (props) => {

    return (
        <div className={style.new__message}>
            <input
                type="text"
                placeholder='Введите сообщение...'
                className={style.current__input}
                value={props.newMessageBody}
                onChange={(e) => { props.changeNewMessage(e.target.value) }}
            />

            <div className={style.current__btn}>
                <Button nameOfButton={props.nameOfButton} />
            </div>
        </div>
    )
};

export default NewMessageSendArea;