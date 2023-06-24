'use client';

import { ComicCard } from '@/components/comicCard/ComicCard';
import { HeroSection } from '../components/heroSection/HeroSection';
import { useHeroData } from '../hooks/useHeroData';
import {
    HeroPageContainer,
    HeroPageLogoContainer,
    HeroPageLogoImage,
} from './style';
import { HeroCard } from '@/components';

interface HeroProps {
    params: {
        id: string;
    };
}

const HeroPage = ({ params }: HeroProps) => {
    const { id } = params;
    const { hero, comics, isLoading } = useHeroData({ id });

    const selectedHero = hero?.[0];

    if (isLoading) return <div>Loading...</div>;

    return (
        <HeroPageContainer>
            <h1>Hero {selectedHero?.name} </h1>
            {selectedHero?.description}
            <HeroSection title="Comics">
                {comics?.map((comic) => (
                    <ComicCard
                        key={comic.id}
                        name={comic.title}
                        thumbnail={comic.thumbnail}
                    />
                ))}
            </HeroSection>
        </HeroPageContainer>
    );
};

export default HeroPage;
