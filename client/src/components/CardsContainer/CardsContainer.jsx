import Card from '../Card/Card'
import "./cardsContainer.css"
import { useSelector } from "react-redux";


const CardsContainer = ({drivers}) =>{

   // const drivers=useSelector((state)=>state.drivers);
   const driverByName=useSelector((state)=>state.driverByName);

   //combino los resultados de la busqueda por nombre con los drivers predeterminados
   const combinedDrivers = driverByName.length > 0 ? driverByName : drivers;
   

   // Normaliza los datos para que todos los equipos sean una cadena separada por comas
   const normalizedDrivers = combinedDrivers.map((driver) => {
    if (Array.isArray(driver.Teams)) {
       // Si es un driver de la base de datos
       const teams = driver.Teams.map((team) => team.name).join(", ");
       return { ...driver, teams };
    } else {
       // Si es un driver de la API, ya está en el formato correcto
       return driver;
    }
 });

    return(
        <div className='Cards-container'>
         
        {normalizedDrivers.map((driver)=>{

        const fullName= `${driver.forename} ${driver.surname}`;
            return <Card
                    key={driver.id}  
                    id={driver.id}
                    image={driver.image} 
                    name={fullName}
                    teams={driver.teams} 
            />
        })}
        </div>   
    )
}

export default CardsContainer;





