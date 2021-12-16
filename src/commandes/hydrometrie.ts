import { entryPoints } from '../constants';
import getRequest from '../http';
import { objectToStringParameters } from '../utils/utils';
import {
  ObsElabParams,
  ObservationsTrParams,
  ReferentielSitesParams,
  ReferentielStationsParams,
} from '../types/hydrometrie';

const hydrometrie = {
  obsElab: async (params?: ObsElabParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrometrie,
      `/obs_elab?${formattedParams}`,
    );
    return datas;
  },
  obsElabCsv: async (params?: ObsElabParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrometrie,
      `/obs_elab.csv?${formattedParams}`,
    );
    return datas;
  },
  observationsTr: async (params?: ObservationsTrParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrometrie,
      `/observations_tr?${formattedParams}`,
    );
    return datas;
  },
  observationsTrCsv: async (params?: ObservationsTrParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrometrie,
      `/observations_tr.csv?${formattedParams}`,
    );
    return datas;
  },
  observationsTrXml: async (params?: ObservationsTrParams): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrometrie,
      `/observations_tr.xml?${formattedParams}`,
    );
    return datas;
  },
  referentielSites: async (
    params?: ReferentielSitesParams,
  ): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrometrie,
      `/referentiel/sites?${formattedParams}`,
    );
    return datas;
  },
  referentielSitesCsv: async (
    params?: ReferentielSitesParams,
  ): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrometrie,
      `/referentiel/sites.csv?${formattedParams}`,
    );
    return datas;
  },
  referentielSitesXml: async (
    params?: ReferentielSitesParams,
  ): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrometrie,
      `/referentiel/sites.xml?${formattedParams}`,
    );
    return datas;
  },
  referentielStations: async (
    params?: ReferentielStationsParams,
  ): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrometrie,
      `/referentiel/sites?${formattedParams}`,
    );
    return datas;
  },
  referentielStationsCsv: async (
    params?: ReferentielStationsParams,
  ): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrometrie,
      `/referentiel/sites.csv?${formattedParams}`,
    );
    return datas;
  },
  referentielStationsXml: async (
    params?: ReferentielStationsParams,
  ): Promise<string> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrometrie,
      `/referentiel/sites.xml?${formattedParams}`,
    );
    return datas;
  },
};

export default hydrometrie;
