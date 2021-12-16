import { HubeauResponse } from '../types/communs';
import { IndicesParams, StationsHydrobioParams, TaxonssParams } from '../types/hydrobio';
declare const hydrobio: {
    indices: (params?: IndicesParams | undefined) => Promise<HubeauResponse>;
    indicesCsv: (params?: IndicesParams | undefined) => Promise<HubeauResponse>;
    stationsHydrobio: (params?: StationsHydrobioParams | undefined) => Promise<HubeauResponse>;
    stationsHydrobioCsv: (params?: StationsHydrobioParams | undefined) => Promise<HubeauResponse>;
    taxons: (params?: TaxonssParams | undefined) => Promise<HubeauResponse>;
    taxonsCsv: (params?: TaxonssParams | undefined) => Promise<HubeauResponse>;
};
export default hydrobio;
