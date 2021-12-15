import { NiveauxNappesParams } from '../types/piezometrie';
declare const piezometrie: () => {
    niveauxNappes: (params?: NiveauxNappesParams | undefined) => Promise<string>;
    niveauxNappesCsv: (params?: NiveauxNappesParams | undefined) => Promise<string>;
};
export default piezometrie;
