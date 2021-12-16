import { entryPoints } from '../constants';
import {getRequest,getRequestCsv} from '../http';
import { objectToStringParameters } from '../utils/utils';
import { HubeauResponse } from '../types/communs';
import {
  ChroniquesParams,
  ChroniquesTrParams,
  StationsParams,
} from '../types/piezometrie';

const piezometrie = {
  chroniques: async (params?: ChroniquesParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.piezometrie,
      `/chroniques?${formattedParams}`,
    );
    return datas;
  },
  chroniquesCsv: async (params?: ChroniquesParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequestCsv(
      entryPoints.piezometrie,
      `/chroniques.csv?${formattedParams}`,
    );
    return datas;
  },
  chroniquesTr: async (
    params?: ChroniquesTrParams,
  ): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.piezometrie,
      `/chroniques_tr?${formattedParams}`,
    );
    return datas;
  },
  chroniquesTrCsv: async (
    params?: ChroniquesTrParams,
  ): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequestCsv(
      entryPoints.piezometrie,
      `/chroniques_tr.csv?${formattedParams}`,
    );
    return datas;
  },
  stations: async (params?: StationsParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.piezometrie,
      `/stations?${formattedParams}`,
    );
    return datas;
  },
  stationsCsv: async (params?: StationsParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequestCsv(
      entryPoints.piezometrie,
      `/stations.csv?${formattedParams}`,
    );
    return datas;
  },
};

export default piezometrie;
