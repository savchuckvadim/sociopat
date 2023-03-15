import { api } from "./api-laravel";



export const dialogsAPI = {
    
    async getDialogs() {
        const response = await api.get('api/dialogs')

        return response.data
    },
    async getDialog(userId: number) {
        const response = await api.get(`api/dialog/${userId}`)

        return response.data
    },
    //TODO isEdited
    async sendMessage(dialogId: number, body: string, isForwarded = false as boolean, isEdited = false as boolean) {
        const response = await api.post('api/message', {
            dialogId, body, isForwarded, isEdited
        })

        return response.data
    },

    async editMessage(messageId: number, body: string) {
        try {
            const response = await api.put('api/message', {
                messageId, body
            })

            return response.data
        } catch (error) {
            alert(error)
        }

    },

    async deleteMessage(messageId: number) {
        const response = await api.delete(`api/message/${messageId}`)
        return response.data
    },
    async getMessages(dialogId: number) {
        const response = await api.get(`api/messages/${dialogId}`)
        return response.data
    },
    // async addGroupDialog(users, dialogsName, dialogId = null) {
    //     const response = await api.post('group-dialog', {
    //         users, dialogsName, dialogId
    //     })

    //     if (response.data.resultCode === 1) {
    //         return response.data
    //     }
    //     else {
    //         alert(response.data.message)
    //     }

    // },

    async sound(dialogId: number, isSound: boolean) {
        try {
            const response = await api.put('api/sound-dialog', {
                dialogId, isSound
            })

            return response.data
        } catch (error: any) {
            alert(error.message)
        }

    },

    async deleteDialog(dialogId: number) {
        const response = await api.delete(`api/dialog/${dialogId}`)

        return response.data
    }

}

