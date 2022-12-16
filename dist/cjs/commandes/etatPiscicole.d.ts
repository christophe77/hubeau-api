import { HubeauResponse } from '../types/communs';
import { CodeEspecePoissonParams, LieuxPecheParams, PoissonsParams } from '../types/etatPiscicole';
declare const etatPiscicole: {
    codeEspecePoisson: (params?: CodeEspecePoissonParams) => Promise<HubeauResponse>;
    codeEspecePoissonCsv: (params?: CodeEspecePoissonParams) => Promise<string>;
    lieuxPeche: (params?: LieuxPecheParams) => Promise<HubeauResponse>;
    lieuxPecheCsv: (params?: LieuxPecheParams) => Promise<string>;
    poissons: (params?: PoissonsParams) => Promise<HubeauResponse>;
    poissonsCsv: (params?: PoissonsParams) => Promise<string>;
};
export default etatPiscicole;
