import { Format } from './communs';

export type ChroniquesParams = {
  code_bss: string[];
  date_debut_mesure?: string;
  date_fin_mesure?: string;
  fields?: string[];
  page?: number;
  size?: number;
  sort?: 'asc' | 'desc';
};
export type ChroniquesTrParams = {
  bbox?: number[];
  bss_id?: string[];
  code_bss?: string[];
  date_debut_mesure?: string;
  date_fin_mesure?: string;
  fields?: string[];
  niveau_ngf_max?: number;
  niveau_ngf_min?: number;
  page?: number;
  profondeur_max?: number;
  profondeur_min?: number;
  size?: number;
  sort?: 'asc' | 'desc';
};
export type StationsParams = {
  bbox?: number[];
  bss_id?: string[];
  code_bdlisa?: string[];
  code_bss?: string[];
  code_commune?: string[];
  code_departement?: string[];
  codes_masse_eau_edl?: string[];
  date_recherche?: string;
  fields?: string[];
  format?: Format;
  nb_mesures_piezo_min?: number;
  page?: number;
  size?: number;
  srid?: number;
};
