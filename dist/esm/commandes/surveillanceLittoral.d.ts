import { HubeauResponse } from '../types/communs';
import { ContaminantsChimiquesParams, LieuxSurvParams } from '../types/surveillanceLittoral';
declare const surveillanceLittoral: {
    contaminantsChimiques: (params?: ContaminantsChimiquesParams | undefined) => Promise<HubeauResponse>;
    contaminantsChimiquesCsv: (params?: ContaminantsChimiquesParams | undefined) => Promise<HubeauResponse>;
    lieuxSurv: (params?: LieuxSurvParams | undefined) => Promise<HubeauResponse>;
    lieuxSurvCsv: (params?: LieuxSurvParams | undefined) => Promise<HubeauResponse>;
};
export default surveillanceLittoral;
