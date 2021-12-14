import { entryPoints } from '../constants';
import getRequest from '../http';
import { objectToStringParameters } from '../utils/utils';
import {
  CodeEspecePoissonParams,
  LieuxPecheParams,
  PoissonsParams
} from '../types/etatPiscicole';

const etatPiscicole = () => {
  return {
    codeEspecePoisson: async (
      params?: CodeEspecePoissonParams,
    ): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.etatPiscicole,
        `/code_espece_poisson?${formattedParams}`,
      );
      return datas;
    },
    codeEspecePoissonCsv: async (
      params?: CodeEspecePoissonParams,
    ): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.etatPiscicole,
        `/code_espece_poisson.csv?${formattedParams}`,
      );
      return datas;
    },
    lieuxPeche: async (params?: LieuxPecheParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.etatPiscicole,
        `/lieux_peche?${formattedParams}`,
      );
      return datas;
    },
    lieuxPecheCsv: async (params?: LieuxPecheParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.etatPiscicole,
        `/lieux_peche.csv?${formattedParams}`,
      );
      return datas;
    },
    poissons: async (params?: PoissonsParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.etatPiscicole,
        `/poissons?${formattedParams}`,
      );
      return datas;
    },
    poissonsCsv: async (params?: PoissonsParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.etatPiscicole,
        `/poissons.csv?${formattedParams}`,
      );
      return datas;
    },
  };
};

export default etatPiscicole;
