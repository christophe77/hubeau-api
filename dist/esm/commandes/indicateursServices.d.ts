import { HubeauResponse } from '../types/communs';
import { CommunesParams, IndicateursParams, ServicesParams } from '../types/indicateursServices';
declare const indicateursServices: {
    communes: (params?: CommunesParams | undefined) => Promise<HubeauResponse>;
    communesCsv: (params?: CommunesParams | undefined) => Promise<HubeauResponse>;
    indicateurs: (params?: IndicateursParams | undefined) => Promise<HubeauResponse>;
    indicateursCsv: (params?: IndicateursParams | undefined) => Promise<HubeauResponse>;
    services: (params?: ServicesParams | undefined) => Promise<HubeauResponse>;
    servicesCsv: (params?: ServicesParams | undefined) => Promise<HubeauResponse>;
};
export default indicateursServices;
