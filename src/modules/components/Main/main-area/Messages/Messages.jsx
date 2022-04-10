
import style from './Messages.module.css'
import NewMessageSendArea from './CurrentDialog.jsx/NewMessageSendArea';
import CurrentDialog from './CurrentDialog.jsx/CurrentDialog';
import { NavLink, Route, Routes } from 'react-router-dom';

const Messages = () => (

    <div className={style.messages__area}>

        <div className={style.dialogs}>

            <NavLink to="dialog/1" className={style.dialog}>

                <div className={style.iconOfDialog}>icon</div>
                <div className={style.lastMessage}>
                    <p className={style.lastMessage__title}>Name of dialog</p>
                    <p className={style.lastMessage__text}>Last Message</p>
                </div>

            </NavLink>

            <NavLink to="dialog/2" className={style.dialog}>
                <div className={style.iconOfDialog}>icon</div>
                <div className={style.lastMessage}>
                    <p className={style.lastMessage__title}>Dmitry</p>
                    <p className={style.lastMessage__text}>Знаешь, что?...</p>
                </div>
            </NavLink>
            <NavLink to="dialog/3" className={style.dialog}>

                <div className={style.iconOfDialog}>icon</div>
                <div className={style.lastMessage}>
                    <p className={style.lastMessage__title}>Nikolay</p>
                    <p className={style.lastMessage__text}>Э ! че не отвеч...</p>
                </div>

            </NavLink>
            <NavLink to="dialog/4" className={style.dialog}>

                <div className={style.iconOfDialog}>icon</div>
                <div className={style.lastMessage}>
                    <p className={style.lastMessage__title}>Nikolay</p>
                    <p className={style.lastMessage__text}>Э ! че не отвеч...</p>
                </div>

            </NavLink>

        </div>
        <div className={style.currentDialogs}>
            <Routes>
                <Route path=":dialog/1" element={<CurrentDialog id={1} />} />
                <Route path=":dialog/2" element={<CurrentDialog id={2} />} />
                <Route path=":dialog/3" element={<CurrentDialog id={3} />} />
                <Route path=":dialog/4" element={<CurrentDialog id={4} />} />
            </Routes>

            <NewMessageSendArea />

        </div>
    </div>
)

export default Messages;