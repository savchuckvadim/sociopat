

export type UserType = {
    id: number
    email: string
    name: string
    followed: 0 | 1
    followers: Array<UserType>
    followeds: Array<UserType>
    profile: ProfileType
    postsCount: number
    isAuthUser: boolean
}

export type ProfileType = {
    about_me: string | null
    avatar: string | null
    created_at: string
    email: string
    hero: string | null
    id: number | null
    name: string
    surname: string
    updated_at: string
    user_id: number | null
}

export type PostType = {
    author: UserType
    body: string
    id: number
    img: string | null
    isAuthLikes: boolean
    likesCount: number
    profile_id: number
    created: string

}

export type LikeType = {
    id: number
    post_id: number,
    author_id: number
}

export enum PreloaderCodesEnum {
    Global = 'global',
    Page = 'page',
    Component = 'component'
}


export type DialogType = {
    id: number
    participant: UserType
    messages: Array<MessageType> | []
    isSound: Boolean
}

export type MessageType = {
    id: number
    dialogId: number
    body: string
    isForwarded: boolean
    isEdited: boolean
    authorId: number
    author: UserType
    isAuthorIsAuth: boolean
    created: string
}


export type PaginatorMetaType = {
    current_page: number
    from: number
    last_page: number
    links: Array<any>
    path: string
    per_page: string
    to: number
    total: number
}

export type PaginatorLinksType = {
    first: string
    last: string
    next: number
    prev: number
}

export type NotificationType = {
    // isSound: boolean
    message: MessageType

}

