'use client';

import { HeroCard } from '@/components';
import { useHeroesData } from '@/hooks/useHeroesData';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { HomeContainer } from './style';

export default function Home() {
    const { heroes, isLoading, fetchHeroesOnScroll } = useHeroesData();

    const lastHeroRef = useRef<HTMLDivElement>(null);

    const route = useRouter();

    const handleHeroCardClick = (id: number) => {
        route.push(`/hero/${id}`);
    };

    if (isLoading) return <span>Loading...</span>;

    return (
        <HomeContainer>
            {heroes.map((hero, index) => (
                <HeroCard
                    key={hero.id}
                    name={hero.name}
                    thumbnail={hero.thumbnail}
                    onClick={() => handleHeroCardClick(hero.id)}
                    ref={heroes.length === index + 1 ? lastHeroRef : null}
                    callback={fetchHeroesOnScroll}
                />
            ))}
        </HomeContainer>
    );
}
