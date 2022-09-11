import { UserType } from "../types/types"

export type GetAuthUserType = {
    resultCode: number
    authUser: UserType
    message: string
}

export type GetUsersType = {
    data: UsersDataType
    links: UsersLinksType
    meta: UsersMetaType
    message:string
}

type UsersDataType = {
    resultCode: number
    totalCount: number
    users: Array<UserType>
}
type UsersMetaType = {
    current_page: number
    from: number
    last_page: number
    links: Array<any>
    path: string
    per_page: string
    to: number
    total: number
}

type UsersLinksType = {

    first: string
    last: string
    next: number
    prev: number
}

export type GetUserType = {
    user: UserType
    resultCode: number
    message:string
}