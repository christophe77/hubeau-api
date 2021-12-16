import { HubeauResponse } from '../types/communs';
import { ChroniquesParams, ChroniquesTrParams, StationsParams } from '../types/piezometrie';
declare const piezometrie: {
    chroniques: (params?: ChroniquesParams | undefined) => Promise<HubeauResponse>;
    chroniquesCsv: (params?: ChroniquesParams | undefined) => Promise<HubeauResponse>;
    chroniquesTr: (params?: ChroniquesTrParams | undefined) => Promise<HubeauResponse>;
    chroniquesTrCsv: (params?: ChroniquesTrParams | undefined) => Promise<HubeauResponse>;
    stations: (params?: StationsParams | undefined) => Promise<HubeauResponse>;
    stationsCsv: (params?: StationsParams | undefined) => Promise<HubeauResponse>;
};
export default piezometrie;
