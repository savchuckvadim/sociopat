export type UserType = {
    id: number | null
    email: string
    name: string
    followed: 0 | 1
    followers: Array<UserType>
    followeds: Array<UserType>
    profile: ProfileType
    postsCount: number | null

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