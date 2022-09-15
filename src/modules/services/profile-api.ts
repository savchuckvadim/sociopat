import { AboutMeType } from "./api-laravel-types";
import { instance } from "./api-laravel";





export const profileAPI = {
    // async getProfile(userId: number) {
    //     const res = await instance.get(`api/profile/${userId}`)
    //     return res.data
    // },
    async getAboutMe(userId: number) {
        const res = await instance.get<AboutMeType>(`api/profile/aboutme/${userId}`);
        return res.data;
    },

    async updateAboutMe(aboutMe: string) {
        const res = await instance.put<AboutMeType>(`api/profile/aboutme`, {
            aboutMe
        });

        return res.data;
    },
};
