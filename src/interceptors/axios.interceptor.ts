import axios from 'axios';
import { getSession } from 'next-auth/react';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(async (config) => {
    const session = await getSession();
    if (session?.user.tokens.token) {
        config.headers.Authorization = `Bearer ${session.user.tokens.token}`;
    }
    return config;
});

export default instance;