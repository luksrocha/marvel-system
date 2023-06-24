import Image from 'next/image';
import styled from 'styled-components';

export const HeaderContainer = styled.nav`
    padding: 0 20px;

    height: 7%;
    width: 100%;
    background-color: #333;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoImage = styled(Image)`
    margin: 0 auto;
`;
