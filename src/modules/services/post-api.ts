import { PostType } from "../types/types";
import { api } from "./api-laravel";


type GetPostsType = {
    resultCode: number
    posts: Array<PostType>
    message: string
}
type SendtPostType = {
    resultCode: number
    post: PostType
    message: string
}

type PostDeleteLikeType = {
    resultCode: number
    message: string
}


export const postAPI = {
    async getPosts(profileId: number) {
        const res = await api.get<GetPostsType>(`api/post/${profileId}`);
        return res.data;
    },
    async sendPost(userId: number, profileId: number, body: string, image: string | null) {
        await api.get<string>("/sanctum/csrf-cookie");

        // await eventsAPI.event()
        const send = await api.post<SendtPostType>('api/post', {
            body,
            image,
            profileId,
            userId
        });

        return send.data;
    },



    async like(postId: number) {
        const res = await api.post<PostDeleteLikeType>('api/like', {
            postId
        });
        return res.data;
    },
    async dislike(postId: number) {
        const res = await api.delete<PostDeleteLikeType>(`api/like/${postId}`);
        return res.data;
    }
};
