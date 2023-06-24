'use client';

import StyledComponentsRegistry from '@/lib/styledComponents/registry';
import { poppinsFont } from '@/assets/fonts';
import { SearchHeroProvider } from '@/context/SearchHeroContext';
import { Header } from '@/components';

import '../styles/globalStyle.css';

export const metadata = {
    title: 'Marvel FPass',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppinsFont.className}>
                <StyledComponentsRegistry>
                    <SearchHeroProvider>
                        <Header />
                        {children}
                    </SearchHeroProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
