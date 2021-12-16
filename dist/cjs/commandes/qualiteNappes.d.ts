import { HubeauResponse } from '../types/communs';
import { AnalysesParams, StationsParams } from '../types/qualiteNappes';
declare const qualiteNappes: {
    analyses: (params?: AnalysesParams | undefined) => Promise<HubeauResponse>;
    analysesCsv: (params?: AnalysesParams | undefined) => Promise<string>;
    stations: (params?: StationsParams | undefined) => Promise<HubeauResponse>;
    stationsCsv: (params?: StationsParams | undefined) => Promise<string>;
};
export default qualiteNappes;
