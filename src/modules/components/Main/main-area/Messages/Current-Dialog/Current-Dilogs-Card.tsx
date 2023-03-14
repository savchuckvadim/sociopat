import React, { useEffect } from 'react'
import style from './Current-Dilogs-Card.module.css'
import arrow from '../../../../../../assets/imgs/dialogs/arrow.svg'
import { useNavigate } from 'react-router-dom'
import SendMessageReduxForm from './Send-Message-Form/Send-Message-Form'
import Author from '../../../../Elements/Author/Author'
import { reset } from 'redux-form'
import BodyOfCurrentDialog from './Current-Dialog-Body/Current-Dialog-Body'
import { AppDispatchType } from '../../../../../redux/store'
import { DialogType, MessageType, UserType } from '../../../../../types/types'
import { SetCurrentDialogType } from '../../../../../redux/reducers/dialogs/dialogs-reducer'



type PropsType = {
    dialog: DialogType
    id: number
    messages: Array<MessageType>
    authUser: UserType
    setCurrentDialog: (dialog: DialogType | null) => SetCurrentDialogType
}


const CurrentDialogsCard: React.FC<PropsType> = (props) => {
    
    const navigate = useNavigate()

    const submit = (values: any, dispatch: AppDispatchType) => {

        // props.sendNewMessage(values)
        dispatch(reset('sendMessage'))
    }

    useEffect(() => {
    
        return () => {
            props.setCurrentDialog(null)
        }
    }, [])



    
    return (
        <div className={style.container}>
            <div className={style.header}>
                <img
                    className={style.arrow}
                    onClick={() => { navigate(-1) }}
                    src={arrow}
                    alt="arrow" />
                <div className={style.author}>
                    <Author
                        // userId={props.dialog.id}
                        size={46}
                        author={props.dialog.participant}
                    />
                </div>

            </div>

            <BodyOfCurrentDialog {...props} />



            <SendMessageReduxForm onSubmit={submit} />

        </div>
    )
}

export default CurrentDialogsCard