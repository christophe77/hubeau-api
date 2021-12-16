import { entryPoints } from '../constants';
import {getRequest,getRequestCsv} from '../http';
import { objectToStringParameters } from '../utils/utils';
import { HubeauResponse } from '../types/communs';
import {
  CommunesParams,
  IndicateursParams,
  ServicesParams,
} from '../types/indicateursServices';

const indicateursServices = {
  communes: async (params?: CommunesParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.indicateursServices,
      `/communes?${formattedParams}`,
    );
    return datas;
  },
  communesCsv: async (params?: CommunesParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequestCsv(
      entryPoints.indicateursServices,
      `/communes.csv?${formattedParams}`,
    );
    return datas;
  },
  indicateurs: async (params?: IndicateursParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.indicateursServices,
      `/indicateurs?${formattedParams}`,
    );
    return datas;
  },
  indicateursCsv: async (
    params?: IndicateursParams,
  ): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequestCsv(
      entryPoints.indicateursServices,
      `/indicateurs.csv?${formattedParams}`,
    );
    return datas;
  },
  services: async (params?: ServicesParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.indicateursServices,
      `/services?${formattedParams}`,
    );
    return datas;
  },
  servicesCsv: async (params?: ServicesParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequestCsv(
      entryPoints.indicateursServices,
      `/services.csv?${formattedParams}`,
    );
    return datas;
  },
};

export default indicateursServices;
