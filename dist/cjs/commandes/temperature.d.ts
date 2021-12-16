import { ChroniqueParams, StationParams } from '../types/temperature';
declare const temperature: {
    chronique: (params?: ChroniqueParams | undefined) => Promise<string>;
    chroniqueCsv: (params?: ChroniqueParams | undefined) => Promise<string>;
    station: (params?: StationParams | undefined) => Promise<string>;
    stationCsv: (params?: StationParams | undefined) => Promise<string>;
};
export default temperature;
