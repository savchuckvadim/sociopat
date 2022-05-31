import style from './Messages.module.css';
import  DialogsContainer from './Dialogs/Dialogs-Container';
import { RouteCurrentDialogContainer } from './Current-Dialog/Route-Current-Dialog-Container';
import React from 'react';
import Title from '../../../Elements/Title/Title'
import { Route, Routes } from 'react-router-dom';
import RouteCurrentDialog from './Current-Dialog/Route-Current-Dialog';

const Messages = (props) => {



    return (
        <>
            <Title title={'Messages'} />
            <div className={style.messages__area}>

                <Routes>
                    <Route key='dialogs' path='/' element={<DialogsContainer />} />
                </Routes>

                <div className={style.currentDialogs}>
                   
                        <RouteCurrentDialog {...props} />
                    
                </div>
            </div>
        </>
    )
}
export default Messages;