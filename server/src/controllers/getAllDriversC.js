const { Driver, Team } = require('../db.js');
const axios = require('axios');

const defaultImage = "https://thumbs.dreamstime.com/b/car-racer-flat-icon-man-red-uniform-orange-background-79711583.jpg"
//const defaultImage = "https://static.vecteezy.com/system/resources/previews/019/201/211/non_2x/back-view-of-racer-illustration-holding-a-helmet-walk-equipped-trophy-icon-racing-flag-icon-the-concept-of-sports-riders-professions-ideals-etc-flat-free-vector.jpg"
//const defaultImage = "https://static.vecteezy.com/system/resources/thumbnails/021/309/263/small_2x/racer-icon-design-free-vector.jpg"


async function getAllDriversC() {
  try {
    // Consulta todos los conductores de la base de datos
    const driversDB = await Driver.findAll({
      include: {
          model: Team,
          attributes: ["name"],
          through: {
              attributes: [],
          },
      }
  });

    // Realiza una solicitud a la API para obtener los conductores
    const response = (await axios.get('http://localhost:5000/drivers')).data;
    const driversApi = response.map((driver) => {
      return {
          id: driver.id,
          forename: driver.name.forename,
          surname: driver.name.surname,
          description: driver.description || "",
          image: driver.image.url || defaultImage,
          nationality: driver.nationality,
          dob: driver.dob,
          teams: driver.teams,

      };
  })



    // Combina los conductores de la base de datos y la API externa
    const drivers = [...driversDB, ...driversApi];

    // Envía la lista de conductores como respuesta
    return drivers;

  } catch (error) {
    console.error('Error al obtener conductores:', error);
    throw new Error ('Error al obtener conductores');
  }
}

module.exports = getAllDriversC;



// const cleanArray = (arr) => {
//  const clean = arr.map((elem) => {
//   id: elem.id,
//   name: elem.name,
//   team: elem.team
//  })
// }


