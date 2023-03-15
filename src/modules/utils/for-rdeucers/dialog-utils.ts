import { DialogType } from './../../types/types';


export const searchDialog = (dialogId:number, groupsOfDialogs: Array<Array<DialogType>>) => {
    //exemple groupsOfDialogs = [[dialogs][groupDialogs]]
    let searchingDialog = null as DialogType | null
    groupsOfDialogs.forEach(group => {
        group.forEach(dialog => {
            if (dialog.id === dialogId) {
                searchingDialog = dialog
            }
        })
    })
    debugger
    if (searchingDialog) {
        const resultCurrentDialog = { ...searchingDialog }
        resultCurrentDialog.messages = searchingDialog.messages.map(message => ({ ...message }))
        return resultCurrentDialog
    } else {
        return searchingDialog
    }


}