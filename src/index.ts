import etatPiscicole from './commands/etatPiscicole/etatPiscicole';

import { IHubeauApi } from './types/hubeauApi';

class HubeauApi implements IHubeauApi {
  etatPiscicole;

  constructor() {
    this.etatPiscicole = etatPiscicole();
  }
}
module.exports = HubeauApi;
