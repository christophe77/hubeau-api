import { prelevements } from '../../dist/esm';

async function chroniques() {
  const params = {
    annee: [2019, 2020],
    nom_commune: ['quimper', 'brest'],
    page: 1,
    size: 5,
  };
  try {
    const results = await prelevements.chroniques(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function chroniquesCsv() {
  const params = {
    annee: [2019, 2020],
    nom_commune: ['quimper', 'brest'],
    page: 1,
    size: 5,
  };
  try {
    const results = await prelevements.chroniquesCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function referentielOuvrages() {
  const params = {
    nom_commune: ['quimper', 'brest'],
    page: 1,
    size: 5,
  };
  try {
    const results = await prelevements.referentielOuvrages(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function referentielOuvragesCsv() {
  const params = {
    nom_commune: ['quimper', 'brest'],
    page: 1,
    size: 5,
  };
  try {
    const results = await prelevements.referentielOuvragesCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function referentielPointsPrelevement() {
  const params = {
    nom_commune: ['quimper', 'brest'],
    page: 1,
    size: 5,
  };
  try {
    const results = await prelevements.referentielPointsPrelevement(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function referentielPointsPrelevementCsv() {
  const params = {
    nom_commune: ['quimper', 'brest'],
    page: 1,
    size: 5,
  };
  try {
    const results = await prelevements.referentielPointsPrelevementCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
