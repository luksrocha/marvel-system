import Image from 'next/image';
import { styled } from 'styled-components';

export const HeroSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
`;

export const HeroSectionChildrenArea = styled.div`
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;
