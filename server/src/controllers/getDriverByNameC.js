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



