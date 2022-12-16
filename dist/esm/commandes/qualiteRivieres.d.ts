import { HubeauResponse } from '../types/communs';
import { AnalysePcParams, StationPcParams, OperationPcParams, ConditionEnvironnementaleParams } from '../types/qualiteRivieres';
declare const qualiteRivieres: {
    analysePc: (params?: AnalysePcParams) => Promise<HubeauResponse>;
    analysePcCsv: (params?: AnalysePcParams) => Promise<string>;
    stationPc: (params?: StationPcParams) => Promise<HubeauResponse>;
    stationPcCsv: (params?: StationPcParams) => Promise<string>;
    operationPc: (params?: OperationPcParams) => Promise<HubeauResponse>;
    operationPcCsv: (params?: OperationPcParams) => Promise<string>;
    conditionEnvironnementalePc: (params?: ConditionEnvironnementaleParams) => Promise<HubeauResponse>;
    conditionEnvironnementalePcCsv: (params?: ConditionEnvironnementaleParams) => Promise<string>;
};
export default qualiteRivieres;
