import { HubeauResponse } from '../types/communs';
import { CommunesUdiParams, ResultatsDisParams } from '../types/qualiteEauPotable';
declare const qualiteEauPotable: {
    communesUdi: (params?: CommunesUdiParams) => Promise<HubeauResponse>;
    communesUdiCsv: (params?: CommunesUdiParams) => Promise<string>;
    resultatsDis: (params?: ResultatsDisParams) => Promise<HubeauResponse>;
    resultatsDisCsv: (params?: ResultatsDisParams) => Promise<string>;
};
export default qualiteEauPotable;
