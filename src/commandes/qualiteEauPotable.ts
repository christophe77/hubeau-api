import { entryPoints } from '../constants';
import getRequest from '../http';
import { objectToStringParameters } from '../utils/utils';
import { HubeauResponse } from '../types/communs';
import { CommunesUdiParams, ResultatsDisParams } from '../types/qualiteEauPotable';

const qualiteEauPotable = {
  communesUdi: async (params?: CommunesUdiParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteEauPotable,
      `/communes_udi?${formattedParams}`,
    );
    return datas;
  },
  communesUdiCsv: async (params?: CommunesUdiParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteEauPotable,
      `/communes_udi.csv?${formattedParams}`,
    );
    return datas;
  },
  resultatsDis: async (params?: ResultatsDisParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteEauPotable,
      `/resultats_dis?${formattedParams}`,
    );
    return datas;
  },
  resultatsDisCsv: async (params?: ResultatsDisParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.qualiteEauPotable,
      `/resultats_dis.csv?${formattedParams}`,
    );
    return datas;
  },
};

export default qualiteEauPotable;
