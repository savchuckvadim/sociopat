
import style from './Messages.module.css'
import NewMessageSendArea from './CurrentDialog.jsx/NewMessageSendArea';
import CurrentDialog from './CurrentDialog.jsx/CurrentDialog';
import { NavLink, Route, Routes } from 'react-router-dom';

const Messages = () => (

    <div className={style.messages__area}>

        <div className={style.dialogs}>
            <NavLink to="/dialog/1">
                <div className={style.dialog}>
                    <div className={style.iconOfDialog}>icon</div>
                    <div className={style.lastMessage}>
                        <p className={style.lastMessage__title}>Name of dialog</p>
                        <p className={style.lastMessage__text}>Last Message</p>
                    </div>
                </div>
            </NavLink>

            <div className={style.dialog}>
                <div className={style.iconOfDialog}>icon</div>
                <div className={style.lastMessage}>
                    <p className={style.lastMessage__title}>Dmitry</p>
                    <p className={style.lastMessage__text}>Знаешь, что?...</p>
                </div>
            </div>
            <div className={style.dialog}>
                <div className={style.iconOfDialog}>icon</div>
                <div className={style.lastMessage}>
                    <p className={style.lastMessage__title}>Nikolay</p>
                    <p className={style.lastMessage__text}>Э ! че не отвеч...</p>
                </div>
            </div>
            <div className={style.dialog}>
                <div className={style.iconOfDialog}>icon</div>
                <div className={style.lastMessage}>
                    <p className={style.lastMessage__title}>Nikolay</p>
                    <p className={style.lastMessage__text}>Э ! че не отвеч...</p>
                </div>
            </div>
        </div>
        <div className={style.currentDialogs}>
            <Routes>
                <Route path="/dialog/1" element={<CurrentDialog />} />
            </Routes>
          
            <NewMessageSendArea />

        </div>
    </div>
)

export default Messages;