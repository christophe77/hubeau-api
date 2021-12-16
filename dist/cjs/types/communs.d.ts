declare type NestedObject = {
    [key: string]: string | number | boolean | string[] | number[];
};
declare type Response = {
    count: number;
    prev: string;
    next: string;
    data: {
        [key: string]: string | number | boolean | string[] | number[] | NestedObject;
    };
};
export declare type HubeauResponse = string | Response;
export declare type Mois = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare type Format = 'json' | 'geojson';
export declare type TypeService = 'AEP' | 'AC' | 'ANC';
export declare type Sort = 'asc' | 'desc';
export {};
