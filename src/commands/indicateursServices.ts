import { entryPoints } from '../constants';
import getRequest from '../http';
import { objectToStringParameters } from '../utils/utils';
import { CommunesParams } from '../types/indicateursServices';

const indicateursServices = () => {
  return {
    communes: async (params?: CommunesParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.indicateursServices,
        `/communes?${formattedParams}`,
      );
      return datas;
    },
    communesCsv: async (params?: CommunesParams): Promise<string> => {
      const formattedParams = params ? objectToStringParameters(params) : '';
      const datas = await getRequest(
        entryPoints.indicateursServices,
        `/communes.csv?${formattedParams}`,
      );
      return datas;
    },
  };
};

export default indicateursServices;
