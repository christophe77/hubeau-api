import { CommunesParams } from '../types/indicateursServices';
declare const indicateursServices: () => {
    communes: (params?: CommunesParams | undefined) => Promise<string>;
    communesCsv: (params?: CommunesParams | undefined) => Promise<string>;
};
export default indicateursServices;
