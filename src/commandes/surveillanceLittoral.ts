import { entryPoints } from '../constants';
import getRequest from '../http';
import { objectToStringParameters } from '../utils/utils';
import { HubeauResponse } from '../types/communs';
import {
  ContaminantsChimiquesParams,
  LieuxSurvParams,
} from '../types/surveillanceLittoral';

const surveillanceLittoral = {
  contaminantsChimiques: async (
    params?: ContaminantsChimiquesParams,
  ): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.surveillanceLittoral,
      `/contaminants_chimiques?${formattedParams}`,
    );
    return datas;
  },
  contaminantsChimiquesCsv: async (
    params?: ContaminantsChimiquesParams,
  ): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.surveillanceLittoral,
      `/contaminants_chimiques.csv?${formattedParams}`,
    );
    return datas;
  },
  lieuxSurv: async (params?: LieuxSurvParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.surveillanceLittoral,
      `/lieux_surv?${formattedParams}`,
    );
    return datas;
  },
  lieuxSurvCsv: async (params?: LieuxSurvParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.surveillanceLittoral,
      `/lieux_surv.csv?${formattedParams}`,
    );
    return datas;
  },
};

export default surveillanceLittoral;
