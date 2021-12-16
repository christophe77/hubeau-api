import { HubeauResponse } from '../types/communs';
import { ChroniquesParams, ChroniquesTrParams, StationsParams } from '../types/piezometrie';
declare const piezometrie: {
    chroniques: (params?: ChroniquesParams | undefined) => Promise<HubeauResponse>;
    chroniquesCsv: (params?: ChroniquesParams | undefined) => Promise<string>;
    chroniquesTr: (params?: ChroniquesTrParams | undefined) => Promise<HubeauResponse>;
    chroniquesTrCsv: (params?: ChroniquesTrParams | undefined) => Promise<string>;
    stations: (params?: StationsParams | undefined) => Promise<HubeauResponse>;
    stationsCsv: (params?: StationsParams | undefined) => Promise<string>;
};
export default piezometrie;
