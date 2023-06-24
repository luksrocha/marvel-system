import { createInstance } from '@/lib/axios/axios';
import { HeroType } from '@/types/heroType';
import { MarvelApiResultsType } from '@/types/marvelApiResultsType';

interface GetHeroesParams {
    id: string;
}

export const getHero = async ({ id }: GetHeroesParams) => {
    const instance = createInstance();

    try {
        const {
            data: { data },
        } = await instance.get<MarvelApiResultsType<HeroType[]>>(
            `/characters/${id}`
        );

        return data;
    } catch (error) {
        throw new Error('');
    }
};
