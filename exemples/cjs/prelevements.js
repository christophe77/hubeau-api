const hubeauApi = require('../../dist/cjs');

async function chroniques() {
  const params = {
    annee: [2019, 2020],
    nom_commune: ['quimper', 'brest'],
    page: 1,
    size: 5,
  };
  try {
    const results = await hubeauApi.prelevements.chroniques(params);
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
    const results = await hubeauApi.prelevements.chroniquesCsv(params);
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
    const results = await hubeauApi.prelevements.referentielOuvrages(params);
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
    const results = await hubeauApi.prelevements.referentielOuvragesCsv(params);
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
    const results = await hubeauApi.prelevements.referentielPointsPrelevement(
      params,
    );
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
    const results =
      await hubeauApi.prelevements.referentielPointsPrelevementCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
