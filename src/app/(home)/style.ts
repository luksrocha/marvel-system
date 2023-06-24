import styled from 'styled-components';

export const HomeContainer = styled.main`
    height: 93%;

    padding: 15px 20px;
    overflow: auto;

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
