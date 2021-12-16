const hubeauApi = require('../../dist/cjs');

async function indices() {
  const params = {
    code_departement: ['29', '56'],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrobio.indices(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function indicesCsv() {
  const params = {
    code_departement: ['29', '56'],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrobio.indicesCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function stationsHydrobio() {
  const params = {
    code_departement: ['29', '56'],
    size: 5,
    distance: 50,
  };
  try {
    const results = await hubeauApi.hydrobio.stationsHydrobio(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
async function stationsHydrobioCsv() {
  const params = {
    code_departement: ['29', '56'],
    size: 5,
    distance: 50,
  };
  try {
    const results = await hubeauApi.hydrobio.stationsHydrobioCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function taxons() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrobio.taxons(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function taxonsCsv() {
  const params = {
    bbox: [1.6194, 47.7965, 2.191, 47.9988],
    size: 5,
  };
  try {
    const results = await hubeauApi.hydrobio.taxonsCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
