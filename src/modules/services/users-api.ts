import { api } from "./api-laravel";
import { PaginatorLinksType, PaginatorMetaType, UserType } from "../types/types";


type GetUsersType = {
    data: UsersDataType
    links: PaginatorLinksType
    meta: PaginatorMetaType 
    message: string
}

type UsersDataType = {
    resultCode: number
    totalCount: number
    users: Array<UserType>
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
            const res = await api.get<GetUsersType>(`api/users?page=${currentPage}&count=${pageSize}`);
            return res.data;
        } catch (error) {
            alert(error);
        }


    },

    async getUser(userId: number) {
        try {
            const res = await api.get<GetUserType>(`api/users/${userId}`);
            return res.data;
        } catch (error) {
            alert(error);
        }
    },

    async follow(userId: number) {
        const res = await api.post<FollowType>(`api/follow`, {
            userId: userId
        });
        return res.data;
    },

    async unfollow(userId: number) {
        const res = await api.delete<UnfollowType>(`api/follow/${userId}`);
        return res.data;
    },
};
