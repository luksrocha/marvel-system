import { HeroSectionChildrenArea, HeroSectionContainer } from './style';

interface HeroSection {
    children: React.ReactNode;
    title: string;
}

const HeroSection = ({ children, title }: HeroSection) => {
    return (
        <HeroSectionContainer>
            <h3>{title}</h3>
            <HeroSectionChildrenArea>{children}</HeroSectionChildrenArea>
        </HeroSectionContainer>
    );
};

export { HeroSection };
