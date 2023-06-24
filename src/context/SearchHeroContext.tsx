import { createContext, useContext, useMemo, useRef, useState } from 'react';

interface SearchHeroContextReturn {
    termToSearch: string;
    handleSearchedHero: (text: string) => void;
}

interface SearchHeroProviderProps {
    children: React.ReactNode;
}

const SearchHeroContext = createContext({} as SearchHeroContextReturn);

export const SearchHeroProvider = ({ children }: SearchHeroProviderProps) => {
    const [termToSearch, setTermToSearch] = useState('');

    const handleSearchedHero = (text: string) => {
        setTermToSearch(text);
    };

    const value = useMemo(
        () => ({
            termToSearch,
            handleSearchedHero,
        }),
        [termToSearch]
    );

    return (
        <SearchHeroContext.Provider value={value}>
            {children}
        </SearchHeroContext.Provider>
    );
};

export const useSearchHeroContext = () => {
    const context = useContext(SearchHeroContext);

    if (!context)
        throw new Error(
            'useSearchHeroContext must be used within a SearchHeroProvider'
        );

    const { termToSearch, handleSearchedHero } = context;

    return { handleSearchedHero, termToSearch };
};
