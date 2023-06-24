import { ThumbnailType } from '@/types/thumbnailType';
import {
    HeroCardContainer,
    HeroCardLogoContainer,
    HeroCardLogoImage,
    HeroCardName,
} from './style';
import { bangersFont } from '@/assets/fonts';
import { forwardRef, useCallback, useEffect } from 'react';
import { useIsOnScreen } from '@/hooks/useIsOnScreen';

interface HeroCardProps {
    name: string;
    thumbnail: ThumbnailType;
    onClick?: () => void;
    callback?: () => void;
}

const HeroCard = forwardRef<HTMLDivElement, HeroCardProps>(
    ({ name, thumbnail, onClick = () => {}, callback }, ref) => {
        const isOnScreen = useIsOnScreen(ref);

        useEffect(() => {
            if (isOnScreen && callback) {
                callback();
            }
        }, [callback, isOnScreen]);

        return (
            <HeroCardContainer ref={ref} onClick={onClick}>
                <HeroCardName className={bangersFont.className}>
                    {name}
                </HeroCardName>
                <HeroCardLogoContainer>
                    <HeroCardLogoImage
                        src={thumbnail.path + '.' + thumbnail.extension}
                        alt={name}
                        fill
                    />
                </HeroCardLogoContainer>
            </HeroCardContainer>
        );
    }
);

HeroCard.displayName = 'HeroCard';

export { HeroCard };
