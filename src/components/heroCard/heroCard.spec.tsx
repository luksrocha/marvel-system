import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeroCard } from './HeroCard';

describe('HeroCard', () => {
    beforeAll(() => {
        render(
            <HeroCard
                name="Spider Man"
                thumbnail={{
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4bb4680432f73',
                    extension: 'jpg',
                }}
                onClick={() => {}}
            />
        );
    });

    it('should render correctly', () => {
        const hasHeroName = screen.getByText('Spider Man');

        expect(hasHeroName).toBeInTheDocument();
    });
});
