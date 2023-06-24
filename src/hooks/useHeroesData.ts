import { getHeroes } from '@/api/charactersAPI';
import { HeroType } from '@/types/heroType';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useIsOnScreen } from './useIsOnScreen';

interface UseHeroesDataProps {
    name?: string | null;
}

const useHeroesData = ({ name = null }: UseHeroesDataProps = {}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingOnScroll, setIsLoadingOnScroll] = useState(false);
    const [heroes, setHeroes] = useState<HeroType[]>([]);
    const savedOffset = useRef<null | number>(null);

    const OFFSET_TO_FETCH = 20;

    const fetchHeroes = useCallback(async () => {
        try {
            const { results, offset } = await getHeroes({
                name,
            });

            savedOffset.current = offset + OFFSET_TO_FETCH;
            setHeroes((prev) => [...prev, ...results]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [name]);

    const fetchHeroesOnScroll = useCallback(async () => {
        setIsLoadingOnScroll((prev) => !prev);
        try {
            const { results, offset } = await getHeroes({
                name,
                offset: savedOffset.current,
            });

            savedOffset.current = offset + OFFSET_TO_FETCH;
            setHeroes((prev) => [...prev, ...results]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoadingOnScroll((prev) => !prev);
        }
    }, [name]);

    useEffect(() => {
        fetchHeroes();
    }, [fetchHeroes]);

    return { isLoading, heroes, fetchHeroesOnScroll, isLoadingOnScroll };
};

export { useHeroesData };
