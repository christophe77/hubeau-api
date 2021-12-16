import { HubeauResponse } from '../types/communs';
import { CommunesUdiParams, ResultatsDisParams } from '../types/qualiteEauPotable';
declare const qualiteEauPotable: {
    communesUdi: (params?: CommunesUdiParams | undefined) => Promise<HubeauResponse>;
    communesUdiCsv: (params?: CommunesUdiParams | undefined) => Promise<string>;
    resultatsDis: (params?: ResultatsDisParams | undefined) => Promise<HubeauResponse>;
    resultatsDisCsv: (params?: ResultatsDisParams | undefined) => Promise<string>;
};
export default qualiteEauPotable;
