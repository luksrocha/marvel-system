import { ThumbnailType } from '@/types/thumbnailType';
import {
    ComicCardContainer,
    ComicCardLogoContainer,
    ComicCardLogoImage,
    ComicCardName,
} from './style';
import { bangersFont } from '@/assets/fonts';
import { forwardRef, useCallback, useEffect } from 'react';
import { useIsOnScreen } from '@/hooks/useIsOnScreen';

interface ComicCardProps {
    name: string;
    thumbnail: ThumbnailType;
}

const ComicCard = ({ name, thumbnail }: ComicCardProps) => {
    return (
        <ComicCardContainer>
            <ComicCardName className={bangersFont.className}>
                {name}
            </ComicCardName>
            <ComicCardLogoContainer>
                <ComicCardLogoImage
                    src={thumbnail.path + '.' + thumbnail.extension}
                    alt={name}
                    fill
                />
            </ComicCardLogoContainer>
        </ComicCardContainer>
    );
};

export { ComicCard };
