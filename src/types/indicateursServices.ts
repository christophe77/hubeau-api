import { Format, TypeService } from './communs';
type CodeIndicateur =
  | 'D102.0'
  | 'D151.0'
  | 'P101.1'
  | 'P102.1'
  | 'P103.2'
  | 'P103.2B'
  | 'P104.3'
  | 'P105.3'
  | 'P106.3'
  | 'P107.2'
  | 'P108.3'
  | 'P109.0'
  | 'P151.1'
  | 'P152.1'
  | 'P153.2'
  | 'P154.0'
  | 'P155.1'
  | 'D201.0'
  | 'D202.0'
  | 'D203.0'
  | 'D204.0'
  | 'P201.1'
  | 'P202.2'
  | 'P202.2B'
  | 'P203.3'
  | 'P204.3'
  | 'P205.3'
  | 'P206.3'
  | 'P207.0'
  | 'P251.1'
  | 'P252.2'
  | 'P253.2'
  | 'P254.3'
  | 'P255.3'
  | 'P256.2'
  | 'P257.0'
  | 'P258.1'
  | 'D301.0'
  | 'D302.0'
  | 'P301.3';
export type CommunesParams = {
  annee?: number;
  code_commune?: string[];
  code_departement?: string[];
  detail_service?: boolean;
  fields?: string[];
  format?: Format;
  page?: number;
  size?: number;
  type_service?: TypeService;
};
export type IndicateursParams = {
  code_indicateur: CodeIndicateur;
  annee?: number;
  fields?: string[];
  format?: Format;
  page?: number;
  size?: number;
};
export type ServicesParams = {
  annee?: number;
  code_commune?: string[];
  code_departement?: string[];
  fields?: string[];
  format?: Format;
  page?: number;
  size?: number;
  type_service?: TypeService;
};
