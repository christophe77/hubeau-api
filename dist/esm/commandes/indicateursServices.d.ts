import { CommunesParams, IndicateursParams, ServicesParams } from '../types/indicateursServices';
declare const indicateursServices: {
    communes: (params?: CommunesParams | undefined) => Promise<string>;
    communesCsv: (params?: CommunesParams | undefined) => Promise<string>;
    indicateurs: (params?: IndicateursParams | undefined) => Promise<string>;
    indicateursCsv: (params?: IndicateursParams | undefined) => Promise<string>;
    services: (params?: ServicesParams | undefined) => Promise<string>;
    servicesCsv: (params?: ServicesParams | undefined) => Promise<string>;
};
export default indicateursServices;
