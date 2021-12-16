import { entryPoints } from '../constants';
import {getRequest,getRequestCsv} from '../http';
import { objectToStringParameters } from '../utils/utils';
import { HubeauResponse } from '../types/communs';
import { AnalysesParams, StationsParams } from '../types/qualiteNappes';

const qualiteNappes = {
  analyses: async (params?: AnalysesParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteNappes,
      `/analyses?${formattedParams}`,
    );
    return datas;
  },
  analysesCsv: async (params?: AnalysesParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequestCsv(
      entryPoints.qualiteNappes,
      `/analyses.csv?${formattedParams}`,
    );
    return datas;
  },
  stations: async (params?: StationsParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteNappes,
      `/stations?${formattedParams}`,
    );
    return datas;
  },
  stationsCsv: async (params?: StationsParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequestCsv(
      entryPoints.qualiteNappes,
      `/stations.csv?${formattedParams}`,
    );
    return datas;
  },
};

export default qualiteNappes;
