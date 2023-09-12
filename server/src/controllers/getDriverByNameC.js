const { Driver } = require('../db');
const { Op } = require('sequelize');
const getAllDriversC  = require('./getAllDriversC'); // Importa la función getAllDriversC

async function getDriverByNameC(name) {
  name = name.toLowerCase();
  // name = name[0].toUpperCase() + name.slice(1, name.length);

  try {
    // Utiliza la función getAllDriversC para obtener todos los conductores con equipos
    const drivers = await getAllDriversC();

    // Filtra los conductores por nombre
    const filteredDrivers = drivers.filter((driver) => {
      const fullName = `${driver.forename} ${driver.surname}`;
      return fullName.toLowerCase().includes(name);
    });

    return filteredDrivers;
  } catch (error) {
    console.error('Error al obtener conductores por nombre:', error);
    throw new Error('Failed to get drivers by name');
  }
}

module.exports = getDriverByNameC;







// const { Driver } = require('../db');
// const axios = require('axios');
// const { Op } = require('sequelize');

// async function getDriverByNameC(name) {
//   name=name.toLowerCase();
//   name=name[0].toUpperCase()+name.slice(1, name.length);
  
//   try {
//     // Buscar en la base de datos
//     const driversDB = await Driver.findAll({
//       where: {
//         [Op.or]: [
//           {
//             'forename': { [Op.iLike]: `%${name}%` },
//           },
//           {
//             'surname': { [Op.iLike]: `%${name}%` },
//           },
//         ],
//       },
//       // include: Team, // Incluye la información de los equipos relacionados
//     });


//     // Realizar una solicitud a la API externa
//     const response = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);


//     // Combina los resultados de la base de datos y la API
//     const drivers = [...driversDB, ...response.data];

//     return drivers;
//   } catch (error) {
//     console.error('Error al obtener conductores por nombre:', error);
//     throw new Error('Failed to get drivers by name');
//   }
// }

// module.exports = getDriverByNameC;








// async function getDriverByNameC(name) {
//   try {
//     // Convertir el nombre a mayúsculas
//     const upperCaseName = name.toUpperCase();

//     // Buscar en la base de datos
//     const driversNameDB = await Driver.findAll({
//       where: {
//         [Op.or]: [
//           { 'forename': { [Op.iLike]: `%${upperCaseName}%` } },
//           { 'surname': { [Op.iLike]: `%${upperCaseName}%` } },
//         ],
//       },
//     });

//     // Realizar una solicitud a la API externa con el nombre en mayúsculas
//     const responseApi = await axios.get(`http://localhost:5000/drivers?name.forename=${upperCaseName}`);

//     // Combina los resultados de la base de datos y la API
//     const filteredDrivers = [...driversNameDB, ...responseApi.data];

//     return filteredDrivers;
//   } catch (error) {
//     console.error('Error al obtener conductores por nombre:', error);
//     throw new Error('Error al obtener conductores por nombre');
//   }
// }

// module.exports = getDriverByNameC;



// async function getDriverByNameC(name) {
//   try {
//     // Consulta en la base de datos sin distinguir mayúsculas y minúsculas
//     const driversDB = await Driver.findAll({
//       where: {
//         [Op.or]: [
//           {
//             'forename': {
//               [Op.iLike]: {
//                 [Op.any]: [`%${name}%`, `%${name.toUpperCase()}%`, `%${name.toLowerCase()}%`],
//               },
//             },
//           },
//           {
//             'surname': {
//               [Op.iLike]: {
//                 [Op.any]: [`%${name}%`, `%${name.toUpperCase()}%`, `%${name.toLowerCase()}%`],
//               },
//             },
//           },
//         ],
//       },
//     });

//     // Realiza una solicitud a la API externa con el nombre en mayúsculas
//     const uppercaseName = name.toUpperCase();
//     const response = await axios.get(`http://localhost:5000/drivers?name.forename=${uppercaseName}`);

//     // Combina los resultados de la base de datos y la API
//     const drivers = [...driversDB, ...response.data];

//     return drivers;
//   } catch (error) {
//     console.error('Error al obtener conductores por nombre:', error);
//     throw new Error('Error al obtener conductores por nombre');
//   }
// }

// module.exports = getDriverByNameC;





// const { Driver, sequelize } = require('../db');
// const axios = require('axios');
// const { Op } = require('sequelize');

// async function getDriverByNameC(name) {
//   try {
//     // Buscar en la base de datos
//     const driversFromDB = await Driver.findAll({
//       where: {
//         [Op.or]: [
//           sequelize.where(sequelize.fn('lower', sequelize.col('name.forename')), {
//             [Op.like]: `%${name.toLowerCase()}%`,
//           }),
//           sequelize.where(sequelize.fn('lower', sequelize.col('name.surname')), {
//             [Op.like]: `%${name.toLowerCase()}%`,
//           }),
//         ],
//       },
//     });

//     // Realizar una solicitud a la API externa
//     const responseAPI = await axios.get(`http://localhost:5000/drivers?name.forename={name}`);

//     // Combinar los resultados de la base de datos y la API
//     const filteredDrivers = [...driversFromDB, ...responseAPI.data];

//     return filteredDrivers;
//   } catch (error) {
//     throw new Error('Failed to get the driver by its name');
//   }
// }

// module.exports = getDriverByNameC;

