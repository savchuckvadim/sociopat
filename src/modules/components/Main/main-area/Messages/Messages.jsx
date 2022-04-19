import style from './Messages.module.css';
import { DialogsContainer } from './Dialogs/Dialogs-Container';
import { NewMessageContainer } from './CurrentDialog.jsx/New-Message-Container';
import { RouteCurrentDialogContainer } from './CurrentDialog.jsx/Route-Current-Dialog-Container';
import React from 'react';
import  Title from '../../../Elements/Title/Title'

const Messages = () => {

    const ref = React.createRef();
    // ref.scrollTop = 999;

    return (
        <>
        <Title title={'Messages'}/>
            {/* <h2 className={style.title} >Messages</h2> */}
            <div className={style.messages__area}>


                <div className={style.dialogs}>
                    <DialogsContainer />
                </div>

                {/* <div className={style.currentDialogs}>
                <div ref={ref} className={style.old_messages}>
                    <RouteCurrentDialogContainer />
                </div>

                <NewMessageContainer />

            </div> */}
            </div>
        </>
    )
}
export default Messages;