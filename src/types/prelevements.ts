import { Format, Sort } from './communs';

export type ChroniquesParams = {
  annee?: number[];
  bbox?: number[];
  code_commune_insee?: string[];
  code_departement?: string[];
  code_mode_obtention_volume?: string[];
  code_ouvrage?: string[];
  code_qualification_volume?: string[];
  code_statut_instruction?: string[];
  code_statut_volume?: string[];
  code_usage?: string[];
  distance?: number;
  fields?: string[];
  format?: Format;
  latitude?: number;
  libelle_departement?: string[];
  longitude?: number;
  nom_commune?: string[];
  page?: number;
  prelevement_ecrasant?: boolean;
  producteur_donnee?:
    | string
    | 'AEAG'
    | 'AEAP'
    | 'AELB'
    | 'AERM'
    | 'AERMC'
    | 'AESN'
    | 'DEALMAY'
    | 'OEGUA'
    | 'OEGUY'
    | 'OEMAR'
    | 'OEREU';
  size?: number;
  sort?: Sort;
  volume_min?: number;
  volume_max?: number;
};
export type ReferentielOuvragesParams = {
  bbox?: number[];
  code_bdlisa?: string[];
  code_commune_insee?: string[];
  code_departement?: string[];
  code_entite_hydro_cours_eau?: string[];
  code_entite_hydro_plan_eau?: string[];
  code_mer_ocean?: string[];
  code_ouvrage?: string[];
  code_type_milieu?: string[];
  codes_points_prelevements?: string[];
  date_exploitation?: string;
  distance?: number;
  fields?: string[];
  format?: Format;
  latitude?: number;
  libelle_departement?: string[];
  longitude?: number;
  nom_commune?: string[];
  nom_ouvrage?: string[];
  page?: number;
  size?: number;
  sort?: Sort;
};
export type ReferentielPointsPrelevementParams = {
  code_bdlisa?: string[];
  code_bss_point_eau?: string[];
  code_commune_insee?: string[];
  code_departement?: string[];
  code_entite_hydro_cours_eau?: string[];
  code_entite_hydro_plan_eau?: string[];
  code_mer_ocean?: string[];
  code_nature?: string[];
  code_ouvrage?: string[];
  code_point_prelevement?: string[];
  code_type_milieu?: string[];
  code_zone_hydro?: string[];
  date_exploitation?: string;
  fields?: string[];
  libelle_departement?: string[];
  nappe_accompagnement?: boolean;
  nom_commune?: string[];
  nom_point_prelevement?: string[];
  page?: number;
  size?: number;
  sort?: Sort;
};
