import { ChroniquesParams, ChroniquesTrParams, StationsParams } from '../types/piezometrie';
declare const piezometrie: () => {
    chroniques: (params?: ChroniquesParams | undefined) => Promise<string>;
    chroniquesCsv: (params?: ChroniquesParams | undefined) => Promise<string>;
    chroniquesTr: (params?: ChroniquesTrParams | undefined) => Promise<string>;
    chroniquesTrCsv: (params?: ChroniquesTrParams | undefined) => Promise<string>;
    stations: (params?: StationsParams | undefined) => Promise<string>;
    stationsCsv: (params?: StationsParams | undefined) => Promise<string>;
};
export default piezometrie;
