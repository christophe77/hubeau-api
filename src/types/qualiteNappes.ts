import { Format } from './communs';
export type AnalysesParams = {
  bbox?: number[];
  bss_id?: string[];
  code_bassin_dce?: string[];
  code_circonscription_administrative_bassin?: string[];
  code_entite_hg_bdlisa?: string[];
  code_fraction?: number[];
  code_groupe_parametre?: string[];
  code_insee_actuel?: string[];
  code_lieu_analyse?: number;
  code_masse_eau_edl?: string[];
  code_masse_eau_rap?: string[];
  code_methode?: number[];
  code_param?: number[];
  code_producteur?: string[];
  code_qualification?: string[];
  code_region?: string[];
  code_remarque_analyse?: number[];
  code_reseau?: string[];
  code_statut_analyse?: string[];
  code_type_point_eau?: string;
  code_type_qualito?: string[];
  code_unite?: number;
  date_debut_prelevement?: string;
  date_fin_prelevement?: string;
  date_max_maj?: string;
  date_min_maj?: string;
  fields?: string;
  nom_bassin_dce?: string[];
  nom_circonscription_administrative_bassin?: string[];
  nom_commune_actuel?: string[];
  nom_departement?: string[];
  nom_entite_hg_bdlisa?: string[];
  nom_fraction?: string[];
  nom_groupe_parametre?: string[];
  nom_lieu_analyse?: string;
  nom_masse_eau_edl?: string[];
  nom_masse_eau_rap?: string[];
  nom_methode?: string[];
  nom_qualification?: string[];
  nom_region?: string[];
  nom_remarque_analyse?: string[];
  nom_reseau?: string[];
  nom_statut_analyse?: string[];
  nom_type_point_eau?: string;
  nom_type_qualito?: string[];
  nom_unite?: string;
  num_departement?: string[];
  page?: number;
  resultat_min?: number;
  resultat_max?: number;
  size?: number;
  sort?: 'asc' | 'desc';
};

export type StationsParams = {
  bassin_dce?: string[];
  bbox?: number[];
  bss_id?: string[];
  circonscription_administrative_bassin?: string[];
  code_commune?: string[];
  code_entite_hg_bdlisa?: string[];
  nom_entite_hg_bdlisa?: string[];
  code_masse_eau_edl?: string[];
  nom_masse_eau_edl?: string[];
  code_masse_eau_rap?: string[];
  nom_masse_eau_rap?: string[];
  date_max_maj?: string;
  date_min_maj?: string;
  fields?: string;
  format?: Format;
  nom_region?: string[];
  nom_reseau?: string[];
  num_departement?: string[];
  page?: number;
  prof_invest_max?: number;
  prof_invest_min?: number;
  size?: number;
  srid?: number;
};
