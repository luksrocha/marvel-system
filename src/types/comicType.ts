import { ThumbnailType } from './thumbnailType';

interface Price {
    type: string;
    price: number;
}

interface Image {
    path: string;
    extension: string;
}

interface Creator {
    resourceURI: string;
    name: string;
    role: string;
}

export interface ComicType {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: Date;
    prices: Price[];
    thumbnail: ThumbnailType;
    images: Image[];
    creators: {
        available: number;
        returned: number;
        collectionURI: string;
        items: Creator[];
    };
}
