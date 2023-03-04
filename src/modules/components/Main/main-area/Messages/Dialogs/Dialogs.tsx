import { DialogType, UserType } from '../../../../../types/types'
import DialogItem from './Dialog-Item/Dialog-item'
import style from './Dialogs.module.css'
type PropsType = {
    dialogs: Array<DialogType>
    users: Array<UserType>
}
const Dialogs: React.FC<PropsType> = (props) => {

    let dialogs =
        props.dialogs.map(dialog => (
            <DialogItem
                key={`dialog-${dialog.id}`}
                id={dialog.id}
                // nameOfDialog={dialog.nameOfDialog}
                // iconOfDialog={dialog.iconOfDialog}
                lastMessage={dialog.messages.length > 0 && dialog.messages[dialog.messages.length - 1].body + '...'}
                userId={dialog.participant.id}
                participant={dialog.participant}
            />
        ))

    return (
        <div className={style.dialogs}>
            {dialogs}
        </div>

    )
}

export default Dialogs