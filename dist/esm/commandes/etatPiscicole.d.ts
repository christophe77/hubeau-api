import { HubeauResponse } from '../types/communs';
import { CodeEspecePoissonParams, LieuxPecheParams, PoissonsParams } from '../types/etatPiscicole';
declare const etatPiscicole: {
    codeEspecePoisson: (params?: CodeEspecePoissonParams | undefined) => Promise<HubeauResponse>;
    codeEspecePoissonCsv: (params?: CodeEspecePoissonParams | undefined) => Promise<HubeauResponse>;
    lieuxPeche: (params?: LieuxPecheParams | undefined) => Promise<HubeauResponse>;
    lieuxPecheCsv: (params?: LieuxPecheParams | undefined) => Promise<HubeauResponse>;
    poissons: (params?: PoissonsParams | undefined) => Promise<HubeauResponse>;
    poissonsCsv: (params?: PoissonsParams | undefined) => Promise<HubeauResponse>;
};
export default etatPiscicole;
