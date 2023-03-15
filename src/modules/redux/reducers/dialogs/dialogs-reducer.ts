import { ThunkAction } from '@reduxjs/toolkit';
// import { DialogType } from './dialogs-reducer';
import { DialogType, MessageType, PreloaderCodesEnum, UserType } from './../../../types/types';
import { dialogsAPI } from "../../../services/dialogs-api"
import { searchDialog } from "../../../utils/for-rdeucers/dialog-utils"
// import { addParticipantsInProgress, CANCEL } from "./group-reducer"
// import { NEW_CONTACT } from "./users/users-reducer"
import { inProgress } from '../preloader/preloader-reducer'
// import { changeModalStatus } from "./modal-reducer"
import { setOnlineInAll } from "../../../utils/for-rdeucers/users-utils"
import { ResultCodesEnum } from '../../../services/api-laravel';
import { AppDispatchType, AppStateType } from '../../store';

const NEW_CONTACT = 'NEW_CONTACT'
const SET_DIALOGS = 'dialogs/SET_DIALOGS'
const SET_DIALOG = 'dialogs/SET_DIALOG'
const SET_CURRENT_DIALOG = 'dialogs/SET_CURRENT_DIALOG'
const CHANGE_CURRENT_DIALOG = 'dialogs/CHANGE_CURRENT_DIALOG'
const SET_NEW_MESSAGE = 'dialogs/SET_NEW_MESSAGE'
const SET_SENDING_STATUS = 'dialogs/SET_SENDING_STATUS'
const PARTICIPANTS_NEW_GROUP_DIALOG = 'dialogs/PARTICIPANTS_NEW_GROUP_DIALOG'
const SET_NEW_GROUP_DIALOG = 'dialogs/SET_NEW_GROUP_DIALOG'
const SET_GROUP_DIALOGS_NAME = 'dialogs/SET_GROUP_DIALOGS_NAME'
export const FORWARDING_MESSAGE = 'dialogs/FORWARDING_MESSAGE'
const FORWARD_MESSAGE = 'dialogs/FORWARD_MESSAGE'
const SET_EDITING_STATUS = 'dialogs/SET_EDITING_STATUS'
const DELETE_MESSAGE = 'dialogs/DELETE_MESSAGE'
const DELETE_DIALOG = 'dialogs/DELETE_DIALOG'
const SET_EDITING_GROUP_DIALOG = 'dialogs/SET_EDITING_GROUP_DIALOG'
const SET_EDITED_GROUP_DIALOG = 'dialogs/SET_EDITED_GROUP_DIALOG'
const SET_SOUND = 'dialogs/SET_SOUND'
export const PRECENSE_USER = 'PRECENSE_USER'



type DialogsType = Array<DialogType>

type InitialStateType = typeof initialState

//TODO
type StatusType = false | 'sending' | 'sended'
//TODO


const initialState = {

    dialogs: [] as DialogsType,
    currentDialogId: undefined as undefined | number,
    currentDialog: null as null | DialogType,
    currentMessage: {
        //  isSending:  false/sending/sended/
        isSending: false as StatusType
    },

    forwardingMessage: {
        inProgress: false as boolean,
        body: ''
    },
    editingMessage: { //sendMessage(dialogId(id), body, isForwarded, isEdited)
        inProgress: false as boolean,
        id: null as null | number,
        body: '' as string
    },



}
type DialogsActionType = SetDialogsType | SetDialogType | SetCurrentDialogType |
    SetChangeCurrentDialogType | SetNewMessageType | SetSendingStatusType | SetParticipantType |
    SetSoundType | SetPrecenseUserType | SetEditingStatusType |
    SetDeleteDialogType
//AC
const setDialogs = (dialogs: DialogsType, dialogIdFromUrl: null | number): SetDialogsType => ({ type: SET_DIALOGS, dialogs, dialogIdFromUrl })
type SetDialogsType = {
    type: typeof SET_DIALOGS
    dialogs: DialogsType
    dialogIdFromUrl: null | number
}
const setDialog = (dialog: DialogType): SetDialogType => ({ type: SET_DIALOG, dialog })
type SetDialogType = {
    type: typeof SET_DIALOG
    dialog: DialogType
}
export const setCurrentDialog = (dialog: DialogType | null): SetCurrentDialogType => ({ type: SET_CURRENT_DIALOG, dialog })
export type SetCurrentDialogType = {
    type: typeof SET_CURRENT_DIALOG
    dialog: DialogType | null
}
export const changeCurrentDialog = (dialog: DialogType): SetChangeCurrentDialogType => ({ type: CHANGE_CURRENT_DIALOG, dialog })
type SetChangeCurrentDialogType = {
    type: typeof CHANGE_CURRENT_DIALOG
    dialog: DialogType
}
export const setNewMessage = (message: MessageType): SetNewMessageType => ({ type: SET_NEW_MESSAGE, message })
type SetNewMessageType = {
    type: typeof SET_NEW_MESSAGE
    message: MessageType
}
const setSendingStatus = (status: StatusType): SetSendingStatusType => ({ type: SET_SENDING_STATUS, status }) //status:false, sending, sended
type SetSendingStatusType = {
    type: typeof SET_SENDING_STATUS
    status: StatusType
}
export const setParticipant = (participant: UserType, bool: boolean): SetParticipantType => ({ type: PARTICIPANTS_NEW_GROUP_DIALOG, participant, bool })
type SetParticipantType = {
    type: typeof PARTICIPANTS_NEW_GROUP_DIALOG
    participant: UserType
    bool: boolean

}
export const setSound = (dialog: DialogType): SetSoundType => ({ type: SET_SOUND, dialog })
type SetSoundType = {
    type: typeof SET_SOUND
    dialog: DialogType

}
export const setPrecenseUser = (onlineUsersIds: Array<number>): SetPrecenseUserType => ({ type: PRECENSE_USER, onlineUsersIds })
type SetPrecenseUserType = {
    type: typeof PRECENSE_USER
    onlineUsersIds: Array<number>
}

//AC for context-menu

// export const changeForwardingMessageStatus = (bool, messageBody) => (dispatch) => {

//     dispatch(changeModalStatus(bool, false))
//     dispatch({ type: FORWARDING_MESSAGE, bool, messageBody })

// }
export const setEditingStatus = (status: StatusType = false, message: MessageType | null): SetEditingStatusType => ({ type: SET_EDITING_STATUS, status, message }) //status:false, true
type SetEditingStatusType = {
    type: typeof SET_EDITING_STATUS
    status: StatusType
    message: MessageType | null

}
const setDeleteMessage = (messageId: any) => ({ type: DELETE_MESSAGE, messageId })

const setDeleteDialog = (dialogId: number): SetDeleteDialogType => ({ type: DELETE_DIALOG, dialogId })
type SetDeleteDialogType = {
    type: typeof DELETE_DIALOG
    dialogId: number

}
// export const setEditingGroupDialog = (dialog: DialogType) => ({ type: SET_EDITING_GROUP_DIALOG, dialog })  //for edit exist group dialog
// type SetEditingGroupDialogType = {
//     type: typeof SET_EDITING_GROUP_DIALOG
//     dialog: DialogType

// }



// THUNKS
type GetStateType = () => AppStateType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, DialogsActionType>

export const getDialogs = (dialogIdFromUrl = null) => async (dispatch: AppDispatchType, getState: GetStateType) => {
    dispatch(inProgress(true, PreloaderCodesEnum.Global))

    const response = await dialogsAPI.getDialogs()
    const dialogs = response.dialogs

    const users = getState().users
    let online = users && users.online
    dispatch(setDialogs(dialogs, dialogIdFromUrl))
    dispatch(setPrecenseUser(online))
    dispatch(inProgress(false, PreloaderCodesEnum.Global))

}

export const getDialog = (userId: number) => async (dispatch: AppDispatchType) => {

    let response = await dialogsAPI.getDialog(userId);

    if (response && response.resultCode === ResultCodesEnum.Success) {
        const dialog = response.dialog
        dispatch(setDialog(dialog))
        // dispatch(setCurrentDialog(dialog))

    }


}

export const sendMessage = (dialogId: number, body: string, isForwarded: boolean, isEdited: boolean) => async (dispatch:AppDispatchType, getState: GetStateType) => {
    
    dispatch(setSendingStatus('sending'))

    const messageResponse = await dialogsAPI.sendMessage(dialogId, body, isForwarded, isEdited)

    dispatch(setSendingStatus(false))
    // setCurrentDialog (dialogId, messages)
    const state = getState()
    
    let dialogs = [
        state.dialogsReducer.dialogs,
    ]
    let isDialogExistInState = searchDialog(dialogId, dialogs)
    if (!isDialogExistInState) { //если диалог, в который пересылают отсутствует в стэйте, запрашивает его на сервере и вставляет в стэйт
        const dialogResponse = await dialogsAPI.getDialog(dialogId)
      debugger  
        if (dialogResponse && dialogResponse.resultCode) {
            if (dialogResponse.dialog) {
                dispatch(setDialog(dialogResponse.dialog))
                // После того как новый Message вставлен во вставленный в стэйт Dialog,
                // Находим обновленный диалог из стэйта
                const dialogForCurrentDialog = searchDialog(dialogId, dialogs)
                //    и диспатчим его в стэйт в качестве CurrentDialog
                dispatch(setCurrentDialog(dialogForCurrentDialog)) //   вставляет текущий диалог

                //После того, как диалог есть в стэйте точно, вставлеят в него и в messages новое сообщение
                dispatch(setNewMessage(messageResponse.createdMessage))
            }
        }
        if (dialogResponse.resultCode === 0) { //если response getDialog вернулся без диалога - ничего не делаем выбрасываем alert
            alert(dialogResponse.message)
        }
    } else { //Если диалог в стэйте есть
debugger
        // После того как новый Message вставлен во вставленный в стэйт Dialog,
        // Находим обновленный диалог из стэйта
        const dialogForCurrentDialog = searchDialog(dialogId, dialogs)

        //    и диспатчим его в стэйт в качестве CurrentDialog
        dispatch(setCurrentDialog(dialogForCurrentDialog)) //   вставляет текущий диалог
        // вставлеят в диалог и в messages новое сообщение
        dispatch(setNewMessage(messageResponse.createdMessage))

    }
    // dispatch(changeForwardingMessageStatus(false, '')) //dispatchим status чтобы убрать окно выбора диалогов(юзеров)
    dispatch(setSendingStatus(false))
}


export const sendEditMessage = (messageId: number, body: string) => async (dispatch: AppDispatchType) => {
    dispatch(setEditingStatus(false, null)) //set editing status - false and clear editing message state
    dispatch(setSendingStatus('sending'))
    const response = await dialogsAPI.editMessage(messageId, body)
    if (response.resultCode) {

        dispatch(setNewMessage(response.editedMessage))
    } else {
        alert(response.message)
        // dispatch(setNewMessage(message))


        dispatch(setSendingStatus(false))
    }
    // export const deleteMessage = (messageId:any) => async (dispatch:any) => {

    //     dispatch(setSendingStatus('sending'))
    //     await dialogsAPI.deleteMessage(messageId)
    //     dispatch(setDeleteMessage(messageId))
    //     dispatch(setSendingStatus(false))
    // }
    // export const getMessages = (dialogId:any) => async (dispatch:any) => {
    //     const response:any = await dialogsAPI.getMessages(dialogId)
    //     dispatch(setCurrentDialog(dialogId, response.messages))

    // }




}
// @ts-ignore
export const changeDialogSound = (dialogId: any, isSound: any) => async (dispatch: any) => {

    const response = await dialogsAPI.sound(dialogId, isSound)
    dispatch(setSound(response.updatingDialog))



}

//for context-menu 
// @ts-ignore
export const deleteDialog = (dialogId: any) => async (dispatch: any) => {

    await dialogsAPI.deleteDialog(dialogId)

    dispatch(setDeleteDialog(dialogId))


}



//REDUCER

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionType): InitialStateType => {

    switch (action.type) {
        ///////////////////////////
        case SET_DIALOGS:
            const setingDialogs = action.dialogs
            let searchingDialogId = setingDialogs[0] && setingDialogs[0].id
            if (action.dialogIdFromUrl) {
                searchingDialogId = action.dialogIdFromUrl
            }
            let currentDialog = searchDialog(searchingDialogId, [setingDialogs])

            return {
                ...state,
                dialogs: setingDialogs,
                currentDialog,
                currentDialogId: searchingDialogId,
            };

        case SET_DIALOG:
            let resultDialogs = []
            let checkExistDialog = searchDialog(action.dialog.id, [state.dialogs])

            if (!checkExistDialog) {

                resultDialogs = [...state.dialogs]

                resultDialogs.unshift(action.dialog)
                return {
                    ...state, dialogs: resultDialogs,
                    currentDialogId: action.dialog.id, currentDialog: action.dialog
                }

            } else {
                return {
                    ...state,
                    currentDialogId: action.dialog.id, currentDialog: action.dialog
                }
            }

        case DELETE_DIALOG:

            let resultDeletingDialogs = [] as DialogsType


            let checkExistDeletingDialog = searchDialog(action.dialogId, [state.dialogs])

            if (checkExistDeletingDialog) {


                state.dialogs.forEach(dialog => {
                    // @ts-ignore
                    if (dialog.id !== action.dialogId) {
                        resultDeletingDialogs.push(dialog)
                    }
                })

                let resultDeletingCurrentDialogId = state.currentDialogId
                let resultDeletingCurrentDialog = state.currentDialog
                // @ts-ignore
                let resultDeletingCurrentMessages = state.messages

                if (state.currentDialogId === action.dialogId) { //ecли удаляемый диалог - текущий 
                    // @ts-ignore
                    let index = state.dialogs[0].id !== action.dialogId ? 0 : 1 //ecли удаляемый диалог - это последний в списке диалогов то индекс текущего выбирает - предпоследний
                    if ((index === 0 && state.dialogs.length > 0) || (index === 1 && state.dialogs.length > 1)) { //ecли  есть другие диалоги
                        // @ts-ignore
                        resultDeletingCurrentDialogId = state.dialogs[index].id
                        // @ts-ignore
                        resultDeletingCurrentDialog = state.dialogs[index]
                        // @ts-ignore
                        resultDeletingCurrentMessages = state.dialogs[index].messages
                    } else { //ecли  нет других диалогов
                        resultDeletingCurrentDialogId = undefined
                        resultDeletingCurrentDialog = null
                        resultDeletingCurrentMessages = []
                    }

                }
                return {
                    // @ts-ignore
                    ...state, dialogs: resultDeletingDialogs,
                    // @ts-ignore
                    currentDialogId: resultDeletingCurrentDialogId,
                    currentDialog: resultDeletingCurrentDialog,
                }
            }
            return state

        case SET_CURRENT_DIALOG:
            if (action.dialog) {
                return { ...state, currentDialogId: action.dialog.id, currentDialog: action.dialog }
            } else {
                return { ...state, currentDialogId: undefined, currentDialog: null }
            }

        case CHANGE_CURRENT_DIALOG:

            if (state.currentDialogId !== action.dialog.id) {

                return { ...state, currentDialogId: action.dialog.id, currentDialog: action.dialog }
            }

            return state

        case SET_NEW_MESSAGE:
            //TODO isEdited

            let message = action.message

            // let currentDialogs = state.dialogs 

            // @ts-ignore
            // if (message.isGroup && !state.groupDialogs.some(dialog => dialog.dialogId === message.dialogId) && action.message.dialogId !== state.currentDialogId) {
            //     return state
            //     // @ts-ignore
            // } else if (!message.isGroup && !state.dialogs.some(dialog => dialog.dialogId === message.dialogId) && action.message.dialogId !== state.currentDialogId) {
            //     return state
            // } else {
            // @ts-ignore
            let messages = []
            // @ts-ignore
            let updatedCrrentDialog = null

            if (state.currentDialog) {
                updatedCrrentDialog = { ...state.currentDialog }
            }

            const currentDialogs = state.dialogs.map(dialog => {

                if (dialog.id === action.message.dialogId) {
                    // @ts-ignore
                    let dialogsMessages = [...dialog.messages]
                    const checkExistMessage = dialogsMessages.some(dialogsMessage => dialogsMessage.id === message.id)

                    if (!checkExistMessage && !action.message.isEdited) {
                        dialogsMessages.push(message)
                        messages = dialogsMessages
                        // @ts-ignore
                        updatedCrrentDialog = { ...dialog, messages: dialogsMessages }
                    }
                    if (checkExistMessage && action.message.isEdited) {

                        dialogsMessages.forEach((m, i) => {
                            if (m.id === action.message.id) {

                                dialogsMessages.splice(i, 1, action.message)
                            }
                        });
                        // @ts-ignore
                        updatedCrrentDialog = { ...dialog, messages: dialogsMessages }
                    }
                    // @ts-ignore
                    return { ...dialog, messages: dialogsMessages }
                } else {

                    return dialog
                }

            })

            if (action.message.dialogId === state.currentDialogId) {
                return {
                    ...state,
                    currentDialog: updatedCrrentDialog,
                    dialogs: currentDialogs,
                }

            } else {

                return { ...state, dialogs: currentDialogs }
            }

        // }
        case SET_SOUND:

            let dialog = action.dialog
            let dialogId = dialog.id

            let updatingCrrentDialog = state.currentDialog
            let searchingDialogs = state.dialogs
            updatingCrrentDialog = state.currentDialog
                // @ts-ignore
                && state.currentDialog.id === dialogId
                // @ts-ignore
                && state.currentDialog.isSound !== dialog.isSound
                // @ts-ignore
                && { ...state.currentDialog, isSound: dialog.isSound } || state.currentDialog




            let resultDialogsSetSound = searchingDialogs.map(d => {

                if (d.id === dialogId) {
                    // @ts-ignore
                    return { ...d, isSound: dialog.isSound }
                } else {
                    return d
                }
            })

            return { ...state, dialogs: resultDialogsSetSound, currentDialog: updatingCrrentDialog }






        case SET_SENDING_STATUS:
            // @ts-ignore
            if (state.currentMessage.sendingStatus !== action.status) {

                return { ...state, currentMessage: { ...state.currentMessage, isSending: action.status } }
            }
            return state


        //context-menu
        // case FORWARDING_MESSAGE:
        //     // @ts-ignore
        //     if (state.isMessageForwarding !== action.bool) {

        //         let updatingForwardingMessage = { ...state.forwardingMessage, inProgress: action.bool, body: action.messageBody }
        //         return { ...state, forwardingMessage: updatingForwardingMessage }
        //     }
        //     return state

        // case FORWARD_MESSAGE:

        //     return state

        // case SET_EDITING_STATUS:

        //     if (action.status) {
        //         return {
        //             ...state, editingMessage: {
        //                 ...state.editingMessage,
        //                 inProgress: action.status,
        //                 id: action.message.id,
        //                 body: action.message.body,
        //             }
        //         }
        //     } else {
        //         return {
        //             ...state, editingMessage: {
        //                 ...state.editingMessage,
        //                 inProgress: false,
        //                 id: null,
        //                 body: '',
        //             }
        //         }
        //     }
        // case DELETE_MESSAGE:
        //     //action: messageId
        //     // @ts-ignore
        //     let resultDeleteMessageDialogs = []// @ts-ignore
        //     let resultDeleteMessageGroupDialogs = []// @ts-ignore
        //     let upgraidDialog = null// @ts-ignore
        //     let upgraidingMessages = []// @ts-ignore
        //     let allDialogs = [state.dialogs]
        //     allDialogs.forEach((dialogs, i) => // @ts-ignore
        //         dialogs.forEach(dialog => {
        //             let isDialog = false
        //             // @ts-ignore
        //             dialog.dialogsMessages.forEach((message, index) => {
        //                 if (message.id === action.messageId) {
        //                     isDialog = true// @ts-ignore
        //                     upgraidingMessages = [...dialog.dialogsMessages]
        //                     upgraidingMessages.splice(index, 1)// @ts-ignore
        //                     upgraidDialog = { ...dialog, dialogsMessages: upgraidingMessages }
        //                     // messageIndex = index

        //                 }
        //             })

        //             !isDialog
        //                 ? resultDeleteMessageGroupDialogs.push(dialog)// @ts-ignore
        //                 : resultDeleteMessageGroupDialogs.push(upgraidDialog)

        //         }))
        //     if (upgraidDialog) {
        //         return {
        //             ...state,// @ts-ignore
        //             dialogs: resultDeleteMessageDialogs,// @ts-ignore
        //             // groupDialog: resultDeleteMessageGroupDialogs,// @ts-ignore
        //             currentDialog: upgraidDialog,// @ts-ignore
        //             currentDialogId: upgraidDialog.dialogId,// @ts-ignore
        //             messages: upgraidingMessages,// @ts-ignore

        //         }
        //     } else {
        //         return state
        //     }


        //users-reducer
        // case NEW_CONTACT:
        //     // newContactId
        //     let isDialogsLikeUser = false

        //     let dialogs = state.dialogs.length > 0

        //         ? state.dialogs.map(dialog => {
        //             // @ts-ignore
        //             dialog.dialogsUsers = dialog.dialogsUsers.map(user => {
        //                 isDialogsLikeUser = true

        //                 if (user.id === action.newContactId) {
        //                     return { ...user, isContacted: true }
        //                 } else {
        //                     return user
        //                 }

        //             })// @ts-ignore
        //             return { ...dialog }
        //         })

        //         : []


        //     let isCurrentDialogLikeUser = false

        //     let currentDialogUsers = state.currentDialog// @ts-ignore
        //         ? state.currentDialog.dialogsUsers.map(user => {
        //             if (user.id === action.newContactId) {
        //                 isCurrentDialogLikeUser = true
        //                 isDialogsLikeUser = true
        //                 return { ...user, isContacted: true }
        //             } else {
        //                 return user
        //             }
        //         })
        //         : []
        //     // @ts-ignore
        //     let resultCurrentDialog = isCurrentDialogLikeUser ? { ...state.currentDialog, dialogsUsers: currentDialogUsers } : state.currentDialog
        //     let result = isDialogsLikeUser ? { ...state, currentDialog: resultCurrentDialog, dialogs } : state
        //     // @ts-ignore
        //     return result

        // case PRECENSE_USER:

        //     const resultDialogsLeavingUser = state.dialogs.length > 0
        //         ? state.dialogs.map(dialog => {// @ts-ignore
        //             const users = setOnlineInAll(dialog.dialogsUsers, action.onlineUsersIds)// @ts-ignore
        //             return { ...dialog, dialogsUsers: users }
        //         })
        //         : state.dialogs

        //     const resultGroupDialogsLeavingUser = state.groupDialogs.length > 0
        //         ? state.groupDialogs.map(dialog => {// @ts-ignore
        //             const users = setOnlineInAll(dialog.dialogsUsers, action.onlineUsersIds)
        //             // @ts-ignore
        //             return { ...dialog, dialogsUsers: users }
        //         })
        //         : state.groupDialogs
        //     // @ts-ignore
        //     const currentUsers = state.currentDialog && setOnlineInAll(state.currentDialog.dialogsUsers, action.onlineUsersIds)

        //     const resultCurrentDialogLeavingUser = state.currentDialog// @ts-ignore
        //         ? { ...state.currentDialog, dialogsUsers: currentUsers }
        //         : state.currentDialog


        //     return {
        //         ...state, dialogs: resultDialogsLeavingUser,
        //         groupDialogs: resultGroupDialogsLeavingUser,
        //         currentDialog: resultCurrentDialogLeavingUser,
        //     }

        // case CANCEL: //for cancel add new group dialog
        //     return { ...state, newGroupDialog: { ...state.newGroupDialog, name: '', participants: [] } }

        default:
            return state;
    }
}


// @ts-ignore
export default dialogsReducer