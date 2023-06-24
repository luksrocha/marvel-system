import { Inter, Poppins, Bangers } from 'next/font/google';

export const interFont = Inter({ subsets: ['latin'] });

export const poppinsFont = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['italic', 'normal'],
});

export const bangersFont = Bangers({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
});
