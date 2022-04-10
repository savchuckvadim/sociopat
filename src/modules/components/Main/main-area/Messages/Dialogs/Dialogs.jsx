
import DialogItem from './Dialog-item'
import style from './Dialogs.module.css'

const Dialogs = (props) => {

    let dialogs =
        props.state.map(dialog => (
            <DialogItem
                key={`dialog-${dialog.id}`}
                id={dialog.id}
                nameOfDialog={dialog.nameOfDialog}
                iconOfDialog={dialog.iconOfDialog}
                lastMessage={dialog.lastMessage +'...'}
            />
        ))

    return (
        <div className={style.dialogs}>
            {dialogs}
        </div>

    )
}

export default Dialogs