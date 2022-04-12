import style from './Messages.module.css';
import RouteCurrentDialog from './CurrentDialog.jsx/Route-Current-Dialog';
import { DialogsContainer } from './Dialogs/Dialogs-Container';
import { NewMessageContainer } from './CurrentDialog.jsx/New-Message-Container';

const Messages = () => (

    <div className={style.messages__area}>
        <div className={style.dialogs}>
            <DialogsContainer />
        </div>

        <div className={style.currentDialogs}>
            <RouteCurrentDialog/>
            <NewMessageContainer />

        </div>
    </div>
)

export default Messages;