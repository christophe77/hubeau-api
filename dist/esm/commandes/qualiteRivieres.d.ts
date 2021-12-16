import { HubeauResponse } from '../types/communs';
import { AnalysePcParams, StationPcParams, OperationPcParams, ConditionEnvironnementaleParams } from '../types/qualiteRivieres';
declare const qualiteRivieres: {
    analysePc: (params?: AnalysePcParams | undefined) => Promise<HubeauResponse>;
    analysePcCsv: (params?: AnalysePcParams | undefined) => Promise<HubeauResponse>;
    stationPc: (params?: StationPcParams | undefined) => Promise<HubeauResponse>;
    stationPcCsv: (params?: StationPcParams | undefined) => Promise<HubeauResponse>;
    operationPc: (params?: OperationPcParams | undefined) => Promise<HubeauResponse>;
    operationPcCsv: (params?: OperationPcParams | undefined) => Promise<HubeauResponse>;
    conditionEnvironnementalePc: (params?: ConditionEnvironnementaleParams | undefined) => Promise<HubeauResponse>;
    conditionEnvironnementalePcCsv: (params?: ConditionEnvironnementaleParams | undefined) => Promise<HubeauResponse>;
};
export default qualiteRivieres;
