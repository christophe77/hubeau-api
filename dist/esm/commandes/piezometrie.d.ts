import { HubeauResponse } from '../types/communs';
import { ChroniquesParams, ChroniquesTrParams, StationsParams } from '../types/piezometrie';
declare const piezometrie: {
    chroniques: (params?: ChroniquesParams) => Promise<HubeauResponse>;
    chroniquesCsv: (params?: ChroniquesParams) => Promise<string>;
    chroniquesTr: (params?: ChroniquesTrParams) => Promise<HubeauResponse>;
    chroniquesTrCsv: (params?: ChroniquesTrParams) => Promise<string>;
    stations: (params?: StationsParams) => Promise<HubeauResponse>;
    stationsCsv: (params?: StationsParams) => Promise<string>;
};
export default piezometrie;
