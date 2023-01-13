import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 1000,
    headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
    },
});

export const getAPI = async (url: string) => {
    const { data } = await client.get(url);
    return data;
};