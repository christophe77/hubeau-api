import { AnalysePcParams, StationPcParams, OperationPcParams, ConditionEnvironnementaleParams } from '../types/qualiteRivieres';
declare const qualiteRivieres: () => {
    analysePc: (params?: AnalysePcParams | undefined) => Promise<string>;
    analysePcCsv: (params?: AnalysePcParams | undefined) => Promise<string>;
    stationPc: (params?: StationPcParams | undefined) => Promise<string>;
    stationPcCsv: (params?: StationPcParams | undefined) => Promise<string>;
    operationPc: (params?: OperationPcParams | undefined) => Promise<string>;
    operationPcCsv: (params?: OperationPcParams | undefined) => Promise<string>;
    conditionEnvironnementalePc: (params?: ConditionEnvironnementaleParams | undefined) => Promise<string>;
    conditionEnvironnementalePcCsv: (params?: ConditionEnvironnementaleParams | undefined) => Promise<string>;
};
export default qualiteRivieres;
