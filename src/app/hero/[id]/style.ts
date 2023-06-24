import Image from 'next/image';
import { styled } from 'styled-components';

export const HeroPageContainer = styled.main`
    height: 93%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding: 15px 20px;
    overflow: auto;
`;

export const HeroPageLogoContainer = styled.div`
    width: 300px;
    height: 300px;
    flex: 1;
    position: relative;
`;

export const HeroPageLogoImage = styled(Image)`
    width: 100%;
    flex: 1;
`;

export const HeroPageBackButtonContainer = styled.div`
    width: 100%;
`;
