import { HubeauResponse } from '../types/communs';
import { CommunesParams, IndicateursParams, ServicesParams } from '../types/indicateursServices';
declare const indicateursServices: {
    communes: (params?: CommunesParams | undefined) => Promise<HubeauResponse>;
    communesCsv: (params?: CommunesParams | undefined) => Promise<string>;
    indicateurs: (params?: IndicateursParams | undefined) => Promise<HubeauResponse>;
    indicateursCsv: (params?: IndicateursParams | undefined) => Promise<string>;
    services: (params?: ServicesParams | undefined) => Promise<HubeauResponse>;
    servicesCsv: (params?: ServicesParams | undefined) => Promise<string>;
};
export default indicateursServices;
