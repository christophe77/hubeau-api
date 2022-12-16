import { HubeauResponse } from '../types/communs';
import { IndicesParams, StationsHydrobioParams, TaxonssParams } from '../types/hydrobio';
declare const hydrobio: {
    indices: (params?: IndicesParams) => Promise<HubeauResponse>;
    indicesCsv: (params?: IndicesParams) => Promise<string>;
    stationsHydrobio: (params?: StationsHydrobioParams) => Promise<HubeauResponse>;
    stationsHydrobioCsv: (params?: StationsHydrobioParams) => Promise<string>;
    taxons: (params?: TaxonssParams) => Promise<HubeauResponse>;
    taxonsCsv: (params?: TaxonssParams) => Promise<string>;
};
export default hydrobio;
