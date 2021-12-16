import { HubeauResponse } from '../types/communs';
import { CodeEspecePoissonParams, LieuxPecheParams, PoissonsParams } from '../types/etatPiscicole';
declare const etatPiscicole: {
    codeEspecePoisson: (params?: CodeEspecePoissonParams | undefined) => Promise<HubeauResponse>;
    codeEspecePoissonCsv: (params?: CodeEspecePoissonParams | undefined) => Promise<string>;
    lieuxPeche: (params?: LieuxPecheParams | undefined) => Promise<HubeauResponse>;
    lieuxPecheCsv: (params?: LieuxPecheParams | undefined) => Promise<string>;
    poissons: (params?: PoissonsParams | undefined) => Promise<HubeauResponse>;
    poissonsCsv: (params?: PoissonsParams | undefined) => Promise<string>;
};
export default etatPiscicole;
