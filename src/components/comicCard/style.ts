import Image from 'next/image';
import { styled } from 'styled-components';

export const ComicCardContainer = styled.div`
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
`;

export const ComicCardName = styled.span`
    font-size: 1.2rem;
    /* display: block; */
`;

export const ComicCardLogoContainer = styled.div`
    flex: 1;
    position: relative;
`;

export const ComicCardLogoImage = styled(Image)`
    width: 100%;
    flex: 1;
`;
