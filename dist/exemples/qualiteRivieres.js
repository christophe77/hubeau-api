const HubeauApi = require('..');
const hubeauApi = new HubeauApi();

async function analysePc() {
  const params = {
    nom_cours_eau: ['odet'],
    date_debut_prelevement: '2021-05-30',
    size: 5,
    sort: 'asc',
  };
  try {
    const results = await hubeauApi.qualiteRivieres.analysePc(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function analysePcCsv() {
  const params = {
    nom_cours_eau: ['odet'],
    date_debut_prelevement: '2021-05-30',
    size: 5,
    sort: 'asc',
  };
  try {
    const results = await hubeauApi.qualiteRivieres.analysePcCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function stationPc() {
  const params = {
    nom_cours_eau: ['odet'],
    date_debut_prelevement: '2021-05-30',
    size: 5,
    sort: 'asc',
  };
  try {
    const results = await hubeauApi.qualiteRivieres.stationPc(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function stationPcCsv() {
  const params = {
    nom_cours_eau: ['odet'],
    date_debut_prelevement: '2021-05-30',
    size: 5,
    sort: 'asc',
  };
  try {
    const results = await hubeauApi.qualiteRivieres.stationPcCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function operationPc() {
  const params = {
    nom_cours_eau: ['odet'],
    date_debut_prelevement: '2021-05-30',
    size: 5,
    sort: 'asc',
  };
  try {
    const results = await hubeauApi.qualiteRivieres.operationPc(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function operationPcCsv() {
  const params = {
    nom_cours_eau: ['odet'],
    date_debut_prelevement: '2021-05-30',
    size: 5,
    sort: 'asc',
  };
  try {
    const results = await hubeauApi.qualiteRivieres.operationPcCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function conditionEnvironnementalePc() {
  const params = {
    nom_cours_eau: ['odet'],
    date_debut_prelevement: '2021-05-30',
    size: 5,
    sort: 'asc',
  };
  try {
    const results = await hubeauApi.qualiteRivieres.conditionEnvironnementalePc(
      params,
    );
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function conditionEnvironnementalePcCsv() {
  const params = {
    nom_cours_eau: ['odet'],
    date_debut_prelevement: '2021-05-30',
    size: 5,
    sort: 'asc',
  };
  try {
    const results =
      await hubeauApi.qualiteRivieres.conditionEnvironnementalePcCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
