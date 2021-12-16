type NestedObject = {
  [key: string]: string | number | boolean | string[] | number[];
};
type Response = {
  count: number;
  prev: string;
  next: string;
  data: {
    [key: string]:
      | string
      | number
      | boolean
      | string[]
      | number[]
      | NestedObject;
  };
};
export type HubeauResponse = string | Response;
export type Mois = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Format = 'json' | 'geojson';
export type TypeService = 'AEP' | 'AC' | 'ANC';
export type Sort = 'asc' | 'desc';
