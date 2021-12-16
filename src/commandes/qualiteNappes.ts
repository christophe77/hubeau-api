import { entryPoints } from '../constants';
import getRequest from '../http';
import { objectToStringParameters } from '../utils/utils';
import { AnalysesParams, StationsParams } from '../types/qualiteNappes';

const qualiteNappes = {
    analyses: async (params?: AnalysesParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.qualiteNappes,
        `/analyses?${formattedParams}`,
      );
      return datas;
    },
    analysesCsv: async (params?: AnalysesParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.qualiteNappes,
        `/analyses.csv?${formattedParams}`,
      );
      return datas;
    },
    stations: async (params?: StationsParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.qualiteNappes,
        `/stations?${formattedParams}`,
      );
      return datas;
    },
    stationsCsv: async (params?: StationsParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.qualiteNappes,
        `/stations.csv?${formattedParams}`,
      );
      return datas;
    },
};

export default qualiteNappes;
