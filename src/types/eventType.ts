export type EventType = {
    resourceURI: string;
    name: string;
};

export type EventsData = {
    available: number;
    collectionURI: string;
    items: Event[];
    returned: number;
};
