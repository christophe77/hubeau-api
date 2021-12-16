import { entryPoints } from '../constants';
import getRequest from '../http';
import { objectToStringParameters } from '../utils/utils';
import { HubeauResponse } from '../types/communs';
import { IndicesParams, StationsHydrobioParams,TaxonssParams } from '../types/hydrobio';

const hydrobio = {
  indices: async (params?: IndicesParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrobio,
      `/indices?${formattedParams}`,
    );
    return datas;
  },
  indicesCsv: async (params?: IndicesParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrobio,
      `/indices.csv?${formattedParams}`,
    );
    return datas;
  },
  stationsHydrobio: async (
    params?: StationsHydrobioParams,
  ): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrobio,
      `/stations_hydrobio?${formattedParams}`,
    );
    return datas;
  },
  stationsHydrobioCsv: async (
    params?: StationsHydrobioParams,
  ): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrobio,
      `/stations_hydrobio.csv?${formattedParams}`,
    );
    return datas;
  },
  taxons: async (params?: TaxonssParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrobio,
      `/taxons?${formattedParams}`,
    );
    return datas;
  },
  taxonsCsv: async (params?: TaxonssParams): Promise<HubeauResponse> => {
    const formattedParams = params ? objectToStringParameters(params) : '';
    const datas = await getRequest(
      entryPoints.hydrobio,
      `/taxons.csv?${formattedParams}`,
    );
    return datas;
  },
};

export default hydrobio;
