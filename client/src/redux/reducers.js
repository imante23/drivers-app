import {
    GET_DRIVERS, 
    GET_DRIVER_BY_ID, 
    GET_DRIVER_BY_NAME, 
    GET_TEAMS, 
    FILTER_BY_TEAM, 
    FILTER_BY_ORIGIN, 
    ORDER_BY_NAME, 
    ORDER_BY_BIRTH, 
    CLEAR_ALL } from './actions';

const initialState = {
    drivers : [],
    driverById : [],
    driverByName: [],
    teams: [],
    driversCopy:[],

}

function rootReducer(state=initialState,action){
    
    switch(action.type){
      
        case GET_DRIVERS:
            return{
                ...state,
                drivers: action.payload,
                driversCopy: action.payload,
        }


        case GET_DRIVER_BY_ID:
            return { ...state, driverById: action.payload }


        case GET_DRIVER_BY_NAME:
            return { ...state, driverByName: action.payload }  


        case GET_TEAMS:
            return { ...state, teams: action.payload }  


        case FILTER_BY_TEAM:
            const allDriversCopy = [...state.driversCopy];
            const filteredByTeam = 
            action.payload === "Todos"
            ? allDriversCopy
            : allDriversCopy.filter((driver) => {
                        // Verifica si el driver es de la base de datos o de la API
                const isDatabaseDriver = driver.createdInDb !== undefined && driver.createdInDb === true;
                const driverTeams = isDatabaseDriver ? driver.Teams.map(team => team.name) : driver.teams ? driver.teams.split(', ').map(team => team.trim()) : [];
                console.log(driverTeams)
                return driverTeams.includes(action.payload);
                });

            return {
                ...state,
                drivers: filteredByTeam,
            };


        case FILTER_BY_ORIGIN:
            const allDriversCopy2 = [...state.driversCopy];
            let filteredByOrigin;                            //
            if(action.payload === "Todos"){                  //Como no puedo poner "disabled" en primera opcion de FilterBar sin sacarla, hago esto
                filteredByOrigin = allDriversCopy2;          //
           } else{                                           //  
            filteredByOrigin = action.payload === "Created"
            ? allDriversCopy2.filter((driver) => driver.createdInDb !== undefined && driver.createdInDb === true)
            : allDriversCopy2.filter((driver) => driver.createdInDb == undefined || driver.createdInDb === false);
           }
            return{
                ...state,
                drivers: filteredByOrigin,
            }


        case ORDER_BY_NAME:
            const orderNames = [...state.driversCopy];
            let sortedNames;
            if(action.payload === "Todos"){
                sortedNames = orderNames;
            } else { 
            sortedNames = action.payload === "asc"
            ? orderNames.sort((a,b)=>a.forename.localeCompare(b.forename))
            : orderNames.sort((a,b)=> b.forename.localeCompare(a.forename))
            }
            return{
                ...state,
                drivers: sortedNames,
            }


        case ORDER_BY_BIRTH:
            const orderBirth = [...state.driversCopy]
            let sortedBirth;
            if(action.payload === "Todos"){
                sortedBirth = orderBirth;
            } else {
            sortedBirth = action.payload === "asc"
            ? orderBirth.sort((a,b)=>a.dob.localeCompare(b.dob))
            : orderBirth.sort((a,b)=> b.dob.localeCompare(a.dob))
            }
            return{
                ...state,
                drivers: sortedBirth,
            }


        case CLEAR_ALL:
            return{
                ...state,
                drivers:[...state.driversCopy],
                driverByName: [],
                selectedTeam: "",
                selectedOrigin: "",
                selectedName:"",
                selectedBirth: "",                 
            }
            

            default:
                return state
            }
        }
        
    export default rootReducer;
        
        
        
        
        
    // case NEW_TEAMS:
    //     const allDriversCopy3= [...state.driversCopy];
    //     const filteredButtonTeams = action.payload 
    //     allDriversCopy3.filter(driver=>{
    //         const driverTeams = driver.Teams.map(team=>team.name);
    //         return driverTeams.includes("Ferrari") || driverTeams.includes("McLaren");
    //     })

    //     return{
    //         ...state,
    //         drivers: filteredButtonTeams,
    //     }