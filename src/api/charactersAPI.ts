import { createInstance } from '@/lib/axios/axios';
import { HeroType } from '@/types/heroType';
import { MarvelApiResultsType } from '@/types/marvelApiResultsType';

interface GetHeroesParams {
    name?: string | null;
    offset?: number | null;
}

export const getHeroes = async ({
    name = null,
    offset = null,
}: GetHeroesParams = {}) => {
    const instance = createInstance();

    try {
        const {
            data: { data },
        } = await instance.get<MarvelApiResultsType<HeroType[]>>(
            '/characters',
            {
                params: {
                    nameStartsWith: name,
                    offset,
                },
            }
        );

        return data;
    } catch (error) {
        throw new Error('');
    }
};
