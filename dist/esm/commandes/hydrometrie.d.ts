import { HubeauResponse } from '../types/communs';
import { ObsElabParams, ObservationsTrParams, ReferentielSitesParams, ReferentielStationsParams } from '../types/hydrometrie';
declare const hydrometrie: {
    obsElab: (params?: ObsElabParams | undefined) => Promise<HubeauResponse>;
    obsElabCsv: (params?: ObsElabParams | undefined) => Promise<string>;
    observationsTr: (params?: ObservationsTrParams | undefined) => Promise<HubeauResponse>;
    observationsTrCsv: (params?: ObservationsTrParams | undefined) => Promise<string>;
    observationsTrXml: (params?: ObservationsTrParams | undefined) => Promise<string>;
    referentielSites: (params?: ReferentielSitesParams | undefined) => Promise<HubeauResponse>;
    referentielSitesCsv: (params?: ReferentielSitesParams | undefined) => Promise<string>;
    referentielSitesXml: (params?: ReferentielSitesParams | undefined) => Promise<string>;
    referentielStations: (params?: ReferentielStationsParams | undefined) => Promise<HubeauResponse>;
    referentielStationsCsv: (params?: ReferentielStationsParams | undefined) => Promise<string>;
    referentielStationsXml: (params?: ReferentielStationsParams | undefined) => Promise<string>;
};
export default hydrometrie;
