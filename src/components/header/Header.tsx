import Link from 'next/link';
import { HeaderContainer, LogoImage } from './style';
import { useSearchHeroContext } from '@/context/SearchHeroContext';
import { SearchBoxHeader } from './components/searchBoxHeader/SearchBoxHeader';

const Header = () => {
    const { handleSearchedHero, termToSearch } = useSearchHeroContext();

    return (
        <HeaderContainer>
            <Link href="/">
                <LogoImage
                    src="/marvelLogo.png"
                    width={120}
                    height={60}
                    alt="logo"
                />
            </Link>
            <SearchBoxHeader />
        </HeaderContainer>
    );
};

export { Header };
