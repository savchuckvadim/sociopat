import Avatar from '../../../../../../Elements/Avatar/Avatar'
import style from './Message-Item.module.css'


const Message = (props) => {

    let nameOfDialog = props.nameOfDialog
    let userId = props.userId
    let iconOfDialog = props.iconOfDialog

    debugger
if(props.message.send === 'to'){
    nameOfDialog = props.currentAuthUser.fullName
    userId = props.currentAuthUser.userId
    iconOfDialog = props.currentAuthUser.photos.small

}
    return (
        <div key={`${props.userId}-${props.id}`} className={style.wrapper}>
            <Avatar
                size={48}
                border={false}
                name={nameOfDialog}
                link={`../../profile/${userId}`}
                img={iconOfDialog}
            />
            <div className={style.text__wrapper}>
                <p className={style.author}>{nameOfDialog}</p>
                <p className={style.message}>{props.message.message_body}</p>
            </div>

        </div>)
}

export default Message