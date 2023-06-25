import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from './Header';

jest.mock('next/navigation', () => require('next-router-mock'));

describe('Header', () => {
    beforeAll(() => {
        render(<Header />);
    });

    it('should render successfully', () => {
        const inputField = screen.getByRole('textbox');

        expect(inputField).toBeInTheDocument();
    });
});
