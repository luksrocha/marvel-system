import { styled } from 'styled-components';

export const SearchContainer = styled.main`
    height: 93%;

    padding: 15px 20px;
    overflow: auto;

    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const SearchHeroesArea = styled.div`
    place-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const SearchBackToHomeText = styled.h2`
    width: fit-content;
`;
