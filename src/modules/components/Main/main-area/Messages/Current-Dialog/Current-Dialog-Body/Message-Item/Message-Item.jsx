import Avatar from '../../../../../../Elements/Avatar/Avatar'
import style from './Message-Item.module.css'
import readed from '../../../../../../../../assets/imgs/dialogs/status-readed.svg'

const Message = (props) => {

    let nameOfDialog = props.nameOfDialog
    let userId = props.userId
    let iconOfDialog = props.iconOfDialog


    if (props.message.send === 'to') {
        nameOfDialog = props.currentAuthUser.fullName
        userId = props.currentAuthUser.userId
        iconOfDialog = props.currentAuthUser.photos.small

    }

    return (
        <div key={`${props.userId}-${props.id}`} className={style.wrapper}>
            <div className={style.avatar}>
            <Avatar
                size={48}
                border={false}
                name={nameOfDialog}
                link={`../../profile/${userId}`}
                img={iconOfDialog}
            />
            </div>
            
            <div className={style.text__wrapper}>
                <div className={style.nameAndStatus__wrapper}>
                    <p className={style.author}>{nameOfDialog}</p>
                    <img src={readed} alt="message-status" />
                </div>

                <p className={style.message}>{props.message.message_body}</p>
            </div>
            <div className={style.date__wrapper}>
                <p className={style.date}>16:20</p>
            </div>
        </div>)
}

export default Message