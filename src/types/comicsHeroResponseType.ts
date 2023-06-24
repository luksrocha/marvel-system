export interface ComicsHeroResponseType {
    available: number;
    returned: number;
    collectionURI: string;
    items: {
        resourceURI: string;
        name: string;
    }[];
}
