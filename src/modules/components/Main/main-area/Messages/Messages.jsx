import style from './Messages.module.css'
import NewMessageSendArea from './CurrentDialog.jsx/NewMessageSendArea';
import RouteCurrentDialog from './CurrentDialog.jsx/Route-Current-Dialog';
import { DialogsContainer } from './Dialogs/Dialogs-Container';

const Messages = () => (

    <div className={style.messages__area}>
        <div className={style.dialogs}>
            <DialogsContainer />
        </div>

        <div className={style.currentDialogs}>
            <RouteCurrentDialog/>
            <NewMessageSendArea />

        </div>
    </div>
)

export default Messages;