import { GetPostsType, SendtPostType, PostDeleteLikeType } from "./api-laravel-types";
import { instance } from "./api-laravel";





export const postAPI = {
    async getPosts(profileId: number) {
        const res = await instance.get<GetPostsType>(`api/post/${profileId}`);
        return res.data;
    },
    async sendPost(userId: number, profileId: number, body: string, image: string) {
        await instance.get<string>("/sanctum/csrf-cookie");

        // await eventsAPI.event()
        const send = await instance.post<SendtPostType>('api/post', {
            body,
            image,
            profileId,
            userId
        });

        return send.data;
    },



    async like(postId: number) {
        const res = await instance.post<PostDeleteLikeType>('api/like', {
            postId
        });
        return res.data;
    },
    async dislike(postId: number) {
        const res = await instance.delete<PostDeleteLikeType>(`api/like/${postId}`);
        return res.data;
    }
};
