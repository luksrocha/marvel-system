import { MagnifyingGlass } from '@phosphor-icons/react';

import { useSearchHeroContext } from '@/context/SearchHeroContext';
import { InputArea, SearchBoxHeaderContainer, SearchButton } from './style';
import { useRouter } from 'next/navigation';
import React from 'react';

const SearchBoxHeader = () => {
    const { push } = useRouter();
    const { handleSearchedHero, termToSearch } = useSearchHeroContext();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!termToSearch) return;
        push(`/search/${termToSearch}`);
        handleSearchedHero('');
    };

    return (
        <SearchBoxHeaderContainer onSubmit={handleSearch}>
            <MagnifyingGlass size={24} color="#EC1D24" />
            <InputArea
                onChange={(e) => handleSearchedHero(e.target.value)}
                value={termToSearch}
            />
            <SearchButton type="submit">Search</SearchButton>
        </SearchBoxHeaderContainer>
    );
};

export { SearchBoxHeader };
