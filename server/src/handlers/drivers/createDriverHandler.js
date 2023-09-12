
// const createDriverC = require('../../controllers/createDriverC.js');

// const createDriverHandler = async (req, res) => {
//   const {
//         forename,
//         surname,
//         nationality,
//         image,
//         dob,
//         description,
//         teams, // Debe ser un array de IDs de equipos
//       } = req.body;
// try {  
// //     const arrayTeams = teams.split(', ');
//     const newDriver = await createDriverC(forename,surname,nationality,image,dob,description,arrayTeams);
//     res.status(200).json(newDriver);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create driver' });
//   }
// };

// module.exports = createDriverHandler;


// const createDriverC = require('../../controllers/createDriverC.js');
// const moment = require('moment');

// const createDriverHandler = async (req, res) => {
//   const {
//     forename,
//     surname,
//     nationality,
//     image,
//     dob, // Debe ser una fecha en formato válido (por ejemplo, "YYYY-MM-DD")
//     description,
//     teams, // Debe ser un array de IDs de equipos
//   } = req.body;

//   try {
//     // Verifica que "teams" sea una cadena
//     if (typeof teams === 'string') {
//       // Formatea la fecha antes de pasarla a la función
//       const formattedDob = moment(dob, 'DD/MM/YYYY').format('YYYY-MM-DD');
//       const newDriver = await createDriverC(
//         forename,
//         surname,
//         nationality,
//         image,
//         formattedDob, // Utiliza la fecha formateada
//         description,
//         teams
//       );
      
//       res.status(200).json(newDriver);
//     } else {
//       // Si "teams" no es una cadena, devuelve un error
//       res.status(400).json({ error: 'Invalid input for "teams"' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create driver' });
//   }
// };

// module.exports = createDriverHandler;



const createDriverC = require('../../controllers/createDriverC.js');

const createDriverHandler = async (req, res) => {
const { forename,surname,description,image,nationality,dob,teams } = req.body;
try {
    const arrayTeams = teams.split(',');
    const newDriver = await createDriverC(forename,surname,description,image,nationality,dob,arrayTeams)
    res.status(200).json(newDriver);
} catch (error) {
    res.status(400).json({ error: error.message });
}
}
module.exports = createDriverHandler;