import { HubeauResponse } from '../types/communs';
import { ChroniquesParams, ReferentielOuvragesParams, ReferentielPointsPrelevementParams } from '../types/prelevements';
declare const prelevements: {
    chroniques: (params?: ChroniquesParams) => Promise<HubeauResponse>;
    chroniquesCsv: (params?: ChroniquesParams) => Promise<string>;
    referentielOuvrages: (params?: ReferentielOuvragesParams) => Promise<HubeauResponse>;
    referentielOuvragesCsv: (params?: ReferentielOuvragesParams) => Promise<string>;
    referentielPointsPrelevement: (params?: ReferentielPointsPrelevementParams) => Promise<HubeauResponse>;
    referentielPointsPrelevementCsv: (params?: ReferentielPointsPrelevementParams) => Promise<string>;
};
export default prelevements;
