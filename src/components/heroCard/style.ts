import Image from 'next/image';
import { styled } from 'styled-components';

export const HeroCardContainer = styled.div`
    height: 270px;
    width: 230px;
    background-color: #333;
    text-align: center;
    color: #f0f0f0;
    padding: 10px;
    position: relative;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export const HeroCardName = styled.span`
    font-size: 1.2rem;
    /* display: block; */
`;

export const HeroCardLogoContainer = styled.div`
    flex: 1;
    position: relative;
`;

export const HeroCardLogoImage = styled(Image)`
    width: 100%;
    flex: 1;
`;
