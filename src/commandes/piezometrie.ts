import { entryPoints } from '../constants';
import getRequest from '../http';
import { objectToStringParameters } from '../utils/utils';
import {
    NiveauxNappesParams
} from '../types/piezometrie';

const piezometrie = () => {
  return {
    niveauxNappes: async (
      params?: NiveauxNappesParams,
    ): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.piezometrie,
        `/chroniques?${formattedParams}`,
      );
      return datas;
    },
    niveauxNappesCsv: async (
      params?: NiveauxNappesParams,
    ): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.piezometrie,
        `/chroniques.csv?${formattedParams}`,
      );
      return datas;
    },

  };
};

export default piezometrie;
