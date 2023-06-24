'use client';

import { useHeroesData } from '@/hooks/useHeroesData';
import {
    SearchBackToHomeText,
    SearchContainer,
    SearchHeroesArea,
} from './style';
import { HeroCard } from '@/components';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowUUpLeft } from '@phosphor-icons/react';
import { useRef } from 'react';

interface SearchPageProps {
    params: {
        slug: string;
    };
}

const SearchPage = ({ params }: SearchPageProps) => {
    const { slug } = params;
    const { heroes, isLoading, fetchHeroesOnScroll } = useHeroesData({
        name: slug,
    });
    const lastHeroRef = useRef(null);
    const route = useRouter();

    if (isLoading) return <div>Loading...</div>;

    if (!heroes.length) return <div>Not found</div>;

    const handleHeroCardClick = (id: number) => {
        route.push(`/hero/${id}`);
    };

    return (
        <SearchContainer>
            <Link href="/" style={{ display: 'flex', gap: '10px' }}>
                <ArrowUUpLeft size={32} />
                <SearchBackToHomeText>Back to home</SearchBackToHomeText>
            </Link>
            <SearchHeroesArea>
                {heroes.map((hero) => (
                    <HeroCard
                        name={hero.name}
                        thumbnail={hero.thumbnail}
                        onClick={() => handleHeroCardClick(hero.id)}
                        key={hero.id}
                        callback={fetchHeroesOnScroll}
                        ref={
                            heroes[heroes.length - 1] === hero
                                ? lastHeroRef
                                : null
                        }
                    />
                ))}
            </SearchHeroesArea>
        </SearchContainer>
    );
};

export default SearchPage;
