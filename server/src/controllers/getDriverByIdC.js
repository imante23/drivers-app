const { Driver, Team } = require('../db.js');
const axios = require('axios');


async function getDriverByIdC(id) {
  try {
    // Intenta buscar el conductor en la base de datos por su ID
    if (isNaN(id)) {
      const driver = await Driver.findByPk(id, {
        include: [
          {
            model: Team,
            attributes: ['name'],
          },
        ],
      });

      if (driver) {
        // Si se encuentra en la base de datos, devolvemos los datos normalizados
        return {
          id: driver.id,
          forename: driver.forename,
          surname: driver.surname,
          nationality: driver.nationality,
          image: driver.image,
          dob: driver.dob,
          description: driver.description,
          teams: driver.Teams.map(team => ({ name: team.name })),
        };
      }
    } else {
      // Si no se encuentra en la base de datos, busca en la API externa
      const response = await axios.get(`http://localhost:5000/drivers/${id}`);

      if (response.status === 200) {
        // Si se encuentra en la API externa, devolvemos los datos normalizados
        const externalDriver = response.data;
        return {
          id: externalDriver.id.toString(),
          forename: externalDriver.name.forename,
          surname: externalDriver.name.surname,
          nationality: externalDriver.nationality,
          image: externalDriver.image.url,
          dob: externalDriver.dob,
          description: externalDriver.description,
          teams: externalDriver.teams.split(', ').map(team => ({ name: team })),
        };
      }
    }

    // Si no se encontró ningún conductor, devolvemos un objeto vacío
    return {};
  } catch (error) {
    throw error; // Puedes manejar el error de otra manera si es necesario
  }
}

module.exports = getDriverByIdC;







// const { Driver, Team } = require('../db.js');
// const axios = require('axios');


// async function getDriverByIdC(id) {

   
//   // Intenta buscar el conductor en la base de datos por su ID
//   if (isNaN(id)) {
//   const driver = await Driver.findByPk(id, {
//     include: [
//       {
//         model: Team,
//         attributes: ['name'],

//       }
//     ]}); 

//     if (driver){
//       return{
//         id: driver.id,
//         forename: driver.forename,
//         surname: driver.surname,
//         nationality: driver.nationality,
//         image: driver.image,
//         dob: driver.dob,
//         description: driver.description,
//         teams: driver.Team.map(team=>({name: team.name})),

//       };
//     }

      
//   } else {
//         // Si no se encuentra en la base de datos, busca en la API externa
//         const response = await axios.get(`http://localhost:5000/drivers/${id}`);

//         if (response.status === 200){
//         // Si se encuentra en la API externa, devuelve la información
//         const apiDriver = response.data;
//         return{
//           id: apiDriver.id.toString(),
//           forename: apiDriver.name.forename,
//           surname: apiDriver.name.surname,
//           nationality: apiDriver.nationality,
//           image: apiDriver.image.url,
//           dob: apiDriver.dob,
//           description: apiDriver.description,
//           teams: apiDriver.teams.split(', ').map(team=>({name: team}))
//         }

//         }
//   } 
//   // Si no se encontró ningún conductor, devolvemos un objeto vacío
//   return {};
// };


// module.exports = getDriverByIdC;
