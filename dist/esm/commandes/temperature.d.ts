import { HubeauResponse } from '../types/communs';
import { ChroniqueParams, StationParams } from '../types/temperature';
declare const temperature: {
    chronique: (params?: ChroniqueParams) => Promise<HubeauResponse>;
    chroniqueCsv: (params?: ChroniqueParams) => Promise<string>;
    station: (params?: StationParams) => Promise<HubeauResponse>;
    stationCsv: (params?: StationParams) => Promise<string>;
};
export default temperature;
