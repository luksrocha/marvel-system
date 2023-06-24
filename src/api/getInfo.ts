import { createInstance } from '@/lib/axios/axios';

interface GetInfoParams {
    url: string;
}

export const getInfo = async <T>({ url }: GetInfoParams) => {
    const instance = createInstance(url);

    const { data } = await instance.get<T>('');

    return data;
};
