import axios from 'axios';
import { useState } from 'react';
import { IComments } from '../interface/IComments';
import { IPost } from '../interface/IPost';
import { IUser } from '../interface/IUser';
export const useApi = () => {
    const api = {
        getAllPosts: async (): Promise<IPost[]> => {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            return response.data;
        },
        getAllUsers: async (): Promise<IUser[]> => {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            return response.data;
        },
        getUserById: async (id: string): Promise<IUser> => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            return response.data;
        },
        getPostById: async (id: string): Promise<IPost> => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            return response.data;
        },
        getCommentsByPostId: async (id: string): Promise<IComments[]> => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${id}/comments`
            );
            return response.data;
        },
    };
    return api;
};
