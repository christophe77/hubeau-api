import { HubeauResponse } from '../types/communs';
import { ChroniqueParams, StationParams } from '../types/temperature';
declare const temperature: {
    chronique: (params?: ChroniqueParams | undefined) => Promise<HubeauResponse>;
    chroniqueCsv: (params?: ChroniqueParams | undefined) => Promise<HubeauResponse>;
    station: (params?: StationParams | undefined) => Promise<HubeauResponse>;
    stationCsv: (params?: StationParams | undefined) => Promise<HubeauResponse>;
};
export default temperature;
