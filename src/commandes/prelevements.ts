import { entryPoints } from '../constants';
import {getRequest,getRequestCsv} from '../http';
import { objectToStringParameters } from '../utils/utils';
import { HubeauResponse } from '../types/communs';
import {
  ChroniquesParams,
  ReferentielOuvragesParams,
  ReferentielPointsPrelevementParams,
} from '../types/prelevements';

const prelevements = {
  chroniques: async (params?: ChroniquesParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.prelevements,
      `/chroniques?${formattedParams}`,
    );
    return datas;
  },
  chroniquesCsv: async (params?: ChroniquesParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequestCsv(
      entryPoints.prelevements,
      `/chroniques.csv?${formattedParams}`,
    );
    return datas;
  },
  referentielOuvrages: async (
    params?: ReferentielOuvragesParams,
  ): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.prelevements,
      `/referentiel/ouvrages?${formattedParams}`,
    );
    return datas;
  },
  referentielOuvragesCsv: async (
    params?: ReferentielOuvragesParams,
  ): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequestCsv(
      entryPoints.prelevements,
      `/referentiel/ouvrages.csv?${formattedParams}`,
    );
    return datas;
  },
  referentielPointsPrelevement: async (
    params?: ReferentielPointsPrelevementParams,
  ): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.prelevements,
      `/referentiel/points_prelevement?${formattedParams}`,
    );
    return datas;
  },
  referentielPointsPrelevementCsv: async (
    params?: ReferentielPointsPrelevementParams,
  ): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequestCsv(
      entryPoints.prelevements,
      `/referentiel/points_prelevement.csv?${formattedParams}`,
    );
    return datas;
  },
};

export default prelevements;
