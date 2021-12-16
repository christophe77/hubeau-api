import { indicateursServices } from '../../dist/esm';

async function communes() {
  const params = {
    annee: 2019,
    page: 1,
    type_service: 'AEP',
  };
  try {
    const results = await indicateursServices.communes(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function communesCsv() {
  const params = {
    annee: 2019,
    page: 1,
    type_service: 'AEP',
  };
  try {
    const results = await indicateursServices.communesCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function indicateurs() {
  const params = {
    code_indicateur: 'D102.0',
    annee: 2019,
    page: 1,
  };
  try {
    const results = await indicateursServices.indicateurs(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function indicateursCsv() {
  const params = {
    code_indicateur: 'D102.0',
    annee: 2019,
    page: 1,
  };
  try {
    const results = await indicateursServices.indicateursCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function services() {
  const params = {
    annee: 2019,
    page: 1,
    type_service: 'AEP',
  };
  try {
    const results = await indicateursServices.services(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function servicesCsv() {
  const params = {
    annee: 2019,
    page: 1,
    type_service: 'AEP',
  };
  try {
    const results = await indicateursServices.servicesCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
