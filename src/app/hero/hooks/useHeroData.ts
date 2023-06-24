import { getHero } from '@/api/getHero';
import { getInfo } from '@/api/getInfo';
import { ComicType } from '@/types/comicType';
import { HeroType } from '@/types/heroType';
import { MarvelApiResultsType } from '@/types/marvelApiResultsType';
import { useCallback, useEffect, useState } from 'react';

interface UseHeroDataProps {
    id: string;
}

const useHeroData = ({ id }: UseHeroDataProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hero, setHero] = useState<HeroType[]>();
    const [comics, setComics] = useState<ComicType[]>([]);

    const fetchHero = useCallback(async () => {
        const { results } = await getHero({ id });

        const comicsArray = results[0]?.comics?.items?.map(
            (comic) => comic?.resourceURI
        );

        await Promise.all(
            comicsArray?.map(async (comic) =>
                getInfo<MarvelApiResultsType<ComicType>>({ url: comic })
            )
        ).then((res) => {
            const comicsArray = res.map((comic) => comic.data.results).flat();
            setComics(comicsArray);
        });

        setHero(results);
        setIsLoading(false);
    }, [id]);

    useEffect(() => {
        fetchHero();
    }, [fetchHero]);

    return { hero, comics, isLoading };
};

export { useHeroData };
