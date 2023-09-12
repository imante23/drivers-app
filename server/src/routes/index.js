const { Router } = require("express");

const getAllDriversHandler = require('../handlers/drivers/getAllDriversHandler.js');
const getDriverByIdHandler = require('../handlers/drivers/getDriverByIdHandler.js');
const getDriverByNameHandler = require('../handlers/drivers/getDriverByNameHandler.js');
const createDriverHandler = require('../handlers/drivers/createDriverHandler.js');
const getAllTeamsHandler = require('../handlers/teams/getAllTeamsHandler.js');


const router = Router();

router.get('/drivers', getAllDriversHandler);
router.get('/drivers/name', getDriverByNameHandler);
router.get('/drivers/:id', getDriverByIdHandler);
router.get('/teams', getAllTeamsHandler);
router.post('/drivers', createDriverHandler);

module.exports = router;



//GET http://localhost:3001/drivers     //Trae drivers con su información. Todos con una imagen por defecto

//GET http://localhost:3001/drivers/:{id}  //Trae detalle especifico (incluye datos de team/teams) de driver por param   (para los post tambien - API/BDD)

//GET http://localhost:3001/drivers/name?={name}  //(Trae 15 por query, mayus/minus, mensaje si no existe, para post tambien -API/BDD)

//GET http://localhost:3001/teams   //(Trae los equipos, tiene que ser desde la BDD)

//POST http://localhost:3001/drivers  //Crea driver (relacionado con team) info por body en BDD