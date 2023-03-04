import { UserType } from "../../types/types"

export const precenseUserUtil = (users: Array<UserType>, userId: number, status: boolean | string): Array<UserType> => {

    if (users.length > 0) {
        const resultUsers = users.map(user => (
            user.id === userId
                ? { ...user, isActive: status }
                : user
        ))
        return resultUsers
    } else {
        return users
    }

}
export const setOnlineInAll = (users: Array<UserType>, onlineUserIds: Array<number>):Array<UserType> => {

    if (users.length > 0) {
        const resultUsers = users.map(user => {

            if (onlineUserIds.some(userId => userId == user.id)) {

                return { ...user, isActive: true }
            } else {

                return { ...user, isActive: false }
            }

        })
        return resultUsers
    } else {
        return users
    }

}

// export const isUserActive = (users: Array<UserType>, userId: Array<number>) => {
//     let isActive = false
//     if (users.length > 0) {

//         users.forEach(
//             user => {
//                 if (user.id === userId)
//                     isActive = user.isActive
//             })

//     }

//     return isActive


// }