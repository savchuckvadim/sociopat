import { instance } from "./api-laravel";


type AboutMeType = {
    resultCode: number
    aboutMe: string
    message: string
}



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
