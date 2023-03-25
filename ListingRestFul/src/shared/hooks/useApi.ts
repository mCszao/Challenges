import axios from 'axios';
import { IPost } from '../interface/IPost';
export const useApi = () => {
    const api = {
        getAllPosts: async (): Promise<IPost[]> => {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            return response.data;
        },
    };
    return api;
};
