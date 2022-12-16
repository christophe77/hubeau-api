import { HubeauResponse } from '../types/communs';
import { CommunesParams, IndicateursParams, ServicesParams } from '../types/indicateursServices';
declare const indicateursServices: {
    communes: (params?: CommunesParams) => Promise<HubeauResponse>;
    communesCsv: (params?: CommunesParams) => Promise<string>;
    indicateurs: (params?: IndicateursParams) => Promise<HubeauResponse>;
    indicateursCsv: (params?: IndicateursParams) => Promise<string>;
    services: (params?: ServicesParams) => Promise<HubeauResponse>;
    servicesCsv: (params?: ServicesParams) => Promise<string>;
};
export default indicateursServices;
