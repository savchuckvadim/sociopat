import style from './Messages.module.css';
import { DialogsContainer } from './Dialogs/Dialogs-Container';
import { NewMessageContainer } from './CurrentDialog.jsx/New-Message-Container';
import { RouteCurrentDialogContainer } from './CurrentDialog.jsx/Route-Current-Dialog-Container';

const Messages = () => (

    <div className={style.messages__area}>
        <div className={style.dialogs}>
            <DialogsContainer />
        </div>

        <div className={style.currentDialogs}>
            <div className={style.old_messages}>
            <RouteCurrentDialogContainer/>
            </div>
            
            <NewMessageContainer />

        </div>
    </div>
)

export default Messages;