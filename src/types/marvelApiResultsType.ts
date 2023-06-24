export interface MarvelApiResultsType<T> {
    data: {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: T;
    };
}
