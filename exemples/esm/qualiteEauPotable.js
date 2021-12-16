import { qualiteEauPotable } from '../../dist/esm';

async function communesUdi() {
  const params = {
    nom_commune: ['quimper'],
  };
  try {
    const results = await qualiteEauPotable.communesUdi(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function communesUdiCsv() {
  const params = {
    nom_commune: ['quimper'],
  };
  try {
    const results = await qualiteEauPotable.communesUdiCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function resultatsDis() {
  const params = {
    code_reseau: ['029000896'],
    sort: 'desc',
    size: 1,
  };
  try {
    const results = await qualiteEauPotable.resultatsDis(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function resultatsDisCsv() {
  const params = {
    code_reseau: ['029000896'],
    sort: 'desc',
    size: 1,
  };
  try {
    const results = await qualiteEauPotable.resultatsDisCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}