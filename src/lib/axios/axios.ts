import axios from 'axios';
import md5 from 'md5';

const ts = new Date().getTime();

const hash = md5(
    `${ts}${process.env.PRIVATE_API_KEY}${process.env.PUBLIC_API_KEY}`
);

export const createInstance = (url = 'https://gateway.marvel.com/v1/public/') =>
    axios.create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            ts,
            apikey: process.env.PUBLIC_API_KEY,
            hash,
        },
    });
