import { HubeauResponse } from '../types/communs';
import { AnalysesParams, StationsParams } from '../types/qualiteNappes';
declare const qualiteNappes: {
    analyses: (params?: AnalysesParams) => Promise<HubeauResponse>;
    analysesCsv: (params?: AnalysesParams) => Promise<string>;
    stations: (params?: StationsParams) => Promise<HubeauResponse>;
    stationsCsv: (params?: StationsParams) => Promise<string>;
};
export default qualiteNappes;
