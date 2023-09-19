const axios = require('axios');
const { Team, Driver } = require('../db');

async function getAllTeamsC() {
  try {
    // Obtener todos los equipos existentes en la base de datos
    const existingTeams = await Team.findAll();

    // Obtener equipos de la API
    const response = await axios.get('http://localhost:5000/drivers');
    const driverData = response.data;

    // Crear un conjunto para almacenar nombres únicos de equipos
    const uniqueTeams = new Set();

    // Iterar sobre los datos de los conductores y extraer los equipos
    driverData.forEach(driver => {
      const teamsString = driver.teams;
      if (teamsString && teamsString.trim() !== "") {
        // Separar los equipos por comas y agregarlos al conjunto de equipos únicos
        const teamsArray = teamsString.split(",").map(team => team.trim());
        teamsArray.forEach(team => uniqueTeams.add(team));
      }
    });

    // Verificar si los equipos ya existen en la base de datos antes de guardarlos
    const teamsToSave = [...uniqueTeams];
    const teamsToSaveInDB = [];
    for (const teamName of teamsToSave) {
      const existingTeam = await Team.findOne({ where: { name: teamName } });
      if (!existingTeam) {
        teamsToSaveInDB.push({ name: teamName });
      }
    }

    // Guardar los equipos nuevos en la base de datos
    if (teamsToSaveInDB.length > 0) {
      await Team.bulkCreate(teamsToSaveInDB);
    }

    // Obtener los equipos asociados a los drivers creados
    const teamsFromDrivers = [];
    driverData.forEach(driver => {
      const teamsString = driver.teams;
      if (teamsString && teamsString.trim() !== "") {
        const teamsArray = teamsString.split(",").map(team => team.trim());
        teamsArray.forEach(teamName => {
          teamsFromDrivers.push({ name: teamName });
        });
      }
    });

    // Verificar y guardar equipos asociados a los drivers si son nuevos
    for (const team of teamsFromDrivers) {
      const existingTeam = await Team.findOne({ where: { name: team.name } });
      if (!existingTeam) {
        await Team.create({ name: team.name });
      }
    }

    // Obtener nuevamente todos los equipos, incluyendo los recién guardados
    const allTeams = await Team.findAll();
    return allTeams;
  } catch (error) {
    throw error;
  }
}

module.exports = getAllTeamsC;













// const axios = require('axios');
// const { Team } = require('../db');

// async function getAllTeamsC() {
//   // Obtener equipos de la API de drivers y almacenarlos en la base de datos si no existen
//   try {
//     const response = await axios.get('http://localhost:5000/drivers'); // Hacer una solicitud GET a la API de drivers
//     const driverData = response.data; // Obtener los datos de los drivers desde la API
    
//     // Crear un conjunto para almacenar nombres únicos de equipos
//     const uniqueTeams = new Set();

//     // Iterar sobre los datos de los drivers y extraer los equipos
//     driverData.forEach(driver => {
//       const teamsString = driver.teams;
//       if (teamsString && teamsString.trim() !== "") {
//         // Separar los equipos por comas y agregarlos al conjunto de equipos únicos
//         const teamsArray = teamsString.split(",").map(team => team.trim());
//         teamsArray.forEach(team => uniqueTeams.add(team));
//       }
//     });

//     // Convertir el conjunto en un array y ordenarlo alfabéticamente
//     // const teamsToSave = [...uniqueTeams].sort();

//     // Iterar sobre los equipos y guardarlos en la base de datos si no existen
//     for (const teamName of uniqueTeams) {
//       const existingTeam = await Team.findOne({ name: teamName });

//       // Si el equipo no existe en la base de datos, guárdalo
//       if (!existingTeam) {
//         const newTeam = new Team({
//           name: teamName
//         });
//         await newTeam.save();
//       }
//     }

//     return uniqueTeams;
//   } catch (error) {
//     throw error;
//   }
// }

// module.exports = getAllTeamsC;




// -  Obtiene un arreglo con todos los teams existentes de la API.
// -  En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
// -  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). 
// Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.