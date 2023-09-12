# RUTAS A UTILIZAR

GET http://localhost:5000/drivers
GET http://localhost:5000/drivers?name.forename={name}
GET http://localhost:5000/drivers/:{id}




# RUTAS A REALIZAR

GET http://localhost:3001/drivers     //Trae drivers con su información. Todos con una imagen por defecto

GET http://localhost:3001/drivers/:{id}  //Trae detalle especifico (incluye datos de team/teams) de driver por param   (para los post tambien - API/BDD)

GET http://localhost:3001/drivers/name?={name}  //(Trae 15 por query, mayus/minus, mensaje si no existe, para post tambien -API/BDD)

GET http://localhost:3001/teams   //(Trae los equipos, tiene que ser desde la BDD)

POST http://localhost:3001/drivers  //Crea driver (relacionado con team) info por body en BDD



