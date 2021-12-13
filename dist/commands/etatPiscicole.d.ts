import { CodeEspecePoissonParams, LieuxPecheParams, PoissonsParams } from '../types/etatPiscicole';
declare const etatPiscicole: () => {
    codeEspecePoisson: (params?: CodeEspecePoissonParams | undefined) => Promise<string>;
    codeEspecePoissonCsv: (params?: CodeEspecePoissonParams | undefined) => Promise<string>;
    lieuxPeche: (params?: LieuxPecheParams | undefined) => Promise<string>;
    lieuxPecheCsv: (params?: LieuxPecheParams | undefined) => Promise<string>;
    poissons: (params?: PoissonsParams | undefined) => Promise<string>;
    poissonsCsv: (params?: PoissonsParams | undefined) => Promise<string>;
};
export default etatPiscicole;
