import { AnalysesParams, StationsParams } from '../types/qualiteNappes';
declare const qualiteNappes: {
    analyses: (params?: AnalysesParams | undefined) => Promise<string>;
    analysesCsv: (params?: AnalysesParams | undefined) => Promise<string>;
    stations: (params?: StationsParams | undefined) => Promise<string>;
    stationsCsv: (params?: StationsParams | undefined) => Promise<string>;
};
export default qualiteNappes;
