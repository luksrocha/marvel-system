import { styled } from 'styled-components';

export const SearchBoxHeaderContainer = styled.form`
    display: flex;
    align-items: center;
    border: 1px solid #f0f0f0;
    width: 450px;

    height: 40px;

    padding: 0 20px;

    border-radius: 20px;

    @media (max-width: 768px) {
        width: 200px;
    }
`;

export const InputArea = styled.input`
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
    font-size: 16px;
    background-color: inherit;
    color: #f0f0f0;
`;

export const SearchButton = styled.button`
    color: #ec1d24;
`;
