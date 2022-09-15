import { GetUsersType, GetUserType, FollowType, UnfollowType } from "./api-laravel-types";
import { instance } from "./api-laravel";





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
