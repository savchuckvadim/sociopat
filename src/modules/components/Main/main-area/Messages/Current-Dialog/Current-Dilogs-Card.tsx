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
import { NavLink } from 'react-router-dom'



type PropsType = {
    dialog: DialogType
    // id: number
    messages: Array<MessageType>
    isMessagesFetching: boolean
    authUser: UserType
    setCurrentDialog: (dialog: DialogType | null) => SetCurrentDialogType
    sendMessage: (dialogId: number, body: string, isForwarded: boolean, isEdited: boolean) => void
    getMessages: (dialogId: number, currentPage: number, pageSize?: number) => any

}


const CurrentDialogsCard: React.FC<PropsType> = (props) => {

    const submit = (values: any, dispatch: AppDispatchType) => {
        props.sendMessage(props.dialog.id, values.message, false, false)
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
                <NavLink replace to={`${'../'}`}>
                    <img
                        className={style.arrow}
                        // onClick={() => { navigate(-1) }}
                        src={arrow}
                        alt="arrow" />
                </NavLink>
                <div className={style.author}>
                    <Author
                        size={46}
                        author={props.dialog.participant}
                        date={props.dialog.participant.profile.updated_at}
                    />
                </div>

            </div>

            <BodyOfCurrentDialog {...props} />



            <SendMessageReduxForm onSubmit={submit} />

        </div>
    )
}

export default CurrentDialogsCard