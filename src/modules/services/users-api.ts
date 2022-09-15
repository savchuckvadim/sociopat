import { instance } from "./api-laravel";
import { UserType } from "../types/types";


type GetUsersType = {
    data: UsersDataType
    links: UsersLinksType
    meta: UsersMetaType
    message: string
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

 type GetUserType = {
    user: UserType
    resultCode: number
    message: string
}

 type FollowType = {
    followedUser: UserType
    resultCode: number
    message: string
}
 type UnfollowType = {
    unfollowedUser: UserType
    resultCode: number
    message: string
}


export const usersAPI = {
    async getUsers(currentPage: number = 1, pageSize: number = 10) {
        try {
            const res = await instance.get<GetUsersType>(`api/users?page=${currentPage}&count=${pageSize}`);
            return res.data;
        } catch (error) {
            alert(error);
        }


    },

    async getUser(userId: number) {
        try {
            const res = await instance.get<GetUserType>(`api/users/${userId}`);

            return res.data;
        } catch (error) {
            alert(error);
        }

    },

    async follow(userId: number) {
        const res = await instance.post<FollowType>(`api/follow`, {
            userId: userId
        });
        return res.data;
    },

    async unfollow(userId: number) {
        const res = await instance.delete<UnfollowType>(`api/follow/${userId}`);
        return res.data;
    },
};
