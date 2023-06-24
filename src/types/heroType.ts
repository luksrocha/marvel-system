import { ComicsHeroResponseType } from './comicsHeroResponseType';
import { ThumbnailType } from './thumbnailType';

export interface HeroType {
    id: number;
    name: string;
    description: string;
    resourceURI: string;
    modified: Date;
    thumbnail: ThumbnailType;
    comics: ComicsHeroResponseType;
}
