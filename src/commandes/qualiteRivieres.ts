import { entryPoints } from '../constants';
import getRequest from '../http';
import { objectToStringParameters } from '../utils/utils';
import { HubeauResponse } from '../types/communs';
import {
  AnalysePcParams,
  StationPcParams,
  OperationPcParams,
  ConditionEnvironnementaleParams,
} from '../types/qualiteRivieres';

const qualiteRivieres = {
  analysePc: async (params?: AnalysePcParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteRivieres,
      `/analyse_pc?${formattedParams}`,
    );
    return datas;
  },
  analysePcCsv: async (params?: AnalysePcParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteRivieres,
      `/analyse_pc.csv?${formattedParams}`,
    );
    return datas;
  },
  stationPc: async (params?: StationPcParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteRivieres,
      `/station_pc?${formattedParams}`,
    );
    return datas;
  },
  stationPcCsv: async (params?: StationPcParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteRivieres,
      `/station_pc.csv?${formattedParams}`,
    );
    return datas;
  },
  operationPc: async (params?: OperationPcParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteRivieres,
      `/operation_pc?${formattedParams}`,
    );
    return datas;
  },
  operationPcCsv: async (
    params?: OperationPcParams,
  ): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteRivieres,
      `/operation_pc.csv?${formattedParams}`,
    );
    return datas;
  },
  conditionEnvironnementalePc: async (
    params?: ConditionEnvironnementaleParams,
  ): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteRivieres,
      `/condition_environnementale_pc?${formattedParams}`,
    );
    return datas;
  },
  conditionEnvironnementalePcCsv: async (
    params?: ConditionEnvironnementaleParams,
  ): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteRivieres,
      `/condition_environnementale_pc.csv?${formattedParams}`,
    );
    return datas;
  },
};

export default qualiteRivieres;
