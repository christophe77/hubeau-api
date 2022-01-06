const hubeauApi = require('../../dist/cjs');

async function contaminantsChimiques() {
  const params = {
    donnees_cc: true,
    size: 5,
  };
  try {
    const results = await hubeauApi.surveillanceLittoral.contaminantsChimiques(
      params,
    );
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function contaminantsChimiquesCsv() {
  const params = {
    donnees_cc: true,
    size: 5,
  };
  try {
    const results =
      await hubeauApi.surveillanceLittoral.contaminantsChimiquesCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function lieuxSurv() {
  const params = {
    bbox: [-1.8, 48.6, -1.7, 48.7],
    donnees_cc: true,
    size: 5,
  };
  try {
    const results = await hubeauApi.surveillanceLittoral.lieuxSurv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

async function lieuxSurvCsv() {
  const params = {
    bbox: [-1.8, 48.6, -1.7, 48.7],
    donnees_cc: true,
    size: 5,
  };
  try {
    const results = await hubeauApi.surveillanceLittoral.lieuxSurvCsv(params);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}
