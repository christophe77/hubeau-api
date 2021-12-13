import { CodeEspecePoissonParams } from './etatPiscicole';

export interface IHubeauApi {
  etatPiscicole: {
    codeEspecePoisson: (
      params?: CodeEspecePoissonParams | undefined,
    ) => Promise<string>;
    codeEspecePoissonCsv: (
      params?: CodeEspecePoissonParams | undefined,
    ) => Promise<string>;
  };
}
