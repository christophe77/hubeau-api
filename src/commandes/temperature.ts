import { entryPoints } from '../constants';
import getRequest from '../http';
import { objectToStringParameters } from '../utils/utils';
import { HubeauResponse } from '../types/communs';
import { ChroniqueParams, StationParams } from '../types/temperature';

const temperature = {
  chronique: async (params?: ChroniqueParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.temperature,
      `/chronique?${formattedParams}`,
    );
    return datas;
  },
  chroniqueCsv: async (params?: ChroniqueParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.temperature,
      `/chronique.csv?${formattedParams}`,
    );
    return datas;
  },
  station: async (params?: StationParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.temperature,
      `/station?${formattedParams}`,
    );
    return datas;
  },
  stationCsv: async (params?: StationParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.temperature,
      `/station.csv?${formattedParams}`,
    );
    return datas;
  },
};

export default temperature;
