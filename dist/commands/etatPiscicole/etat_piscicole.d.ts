import { CodeEspecePoissonParams } from '../../types/etatPiscicole';
declare const etat_piscicole: () => {
    code_espece_poisson: (params?: CodeEspecePoissonParams | undefined) => Promise<string>;
};
export default etat_piscicole;
