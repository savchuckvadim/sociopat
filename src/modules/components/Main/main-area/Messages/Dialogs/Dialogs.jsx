
import DialogItem from './Dialog-Item/Dialog-item'
import style from './Dialogs.module.css'

const Dialogs = (props) => {
 
    
    let dialogs =
        props.dialogs.map(dialog => (
            <DialogItem
                key={`dialog-${dialog.id}`}
                id={dialog.id}
                nameOfDialog={dialog.nameOfDialog}
                iconOfDialog={dialog.iconOfDialog}
                lastMessage={dialog.messages[dialog.messages.length-1].message_body +'...'}
                userId={dialog.userId}
            />
        ))

    return (
        <div className={style.dialogs}>
            {dialogs}
        </div>

    )
}

export default Dialogs