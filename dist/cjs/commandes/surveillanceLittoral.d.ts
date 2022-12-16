import { HubeauResponse } from '../types/communs';
import { ContaminantsChimiquesParams, LieuxSurvParams } from '../types/surveillanceLittoral';
declare const surveillanceLittoral: {
    contaminantsChimiques: (params?: ContaminantsChimiquesParams) => Promise<HubeauResponse>;
    contaminantsChimiquesCsv: (params?: ContaminantsChimiquesParams) => Promise<string>;
    lieuxSurv: (params?: LieuxSurvParams) => Promise<HubeauResponse>;
    lieuxSurvCsv: (params?: LieuxSurvParams) => Promise<string>;
};
export default surveillanceLittoral;
