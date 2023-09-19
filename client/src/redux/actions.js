import axios from "axios";

export const GET_DRIVERS = "GET_DRIVERS";
export const GET_DRIVER_BY_ID = "GET_DRIVER_BY_ID";
export const GET_DRIVER_BY_NAME = "GET_DRIVER_BY_NAME";
export const GET_TEAMS = "GET_TEAMS";
export const FILTER_BY_TEAM = "FILTER_BY_TEAM";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_BIRTH = "ORDER_BY_BIRTH";
export const CLEAR_ALL = "CLEAR_ALL";


export function getDrivers () {
    return async function (dispatch){
        try{
            const response = await axios.get("http://localhost:3001/drivers");
            const drivers = response.data;
            return dispatch({
                type: GET_DRIVERS,
                payload: drivers,
            });
        } catch (error){}
    }
}

export function getDriverByID (id) {
    return async function (dispatch){
        try{
            const response = await axios.get(`http://localhost:3001/drivers/${id}`);
            const driver = response.data;
            return dispatch({
                type: GET_DRIVER_BY_ID,
                payload: driver,
            });
        } catch (error){}
    }
}

export function getDriverByName(name){
    return async function (dispatch){
        try{
            const response = await axios.get(`http://localhost:3001/drivers/name?name=${name}`);
            const driver = response.data;
         return dispatch({
            type: GET_DRIVER_BY_NAME,
            payload: driver,
        });
    } catch (error){}
  }
}


export function getTeams(){
    return async function(dispatch){
        try{
            const response = await axios.get(`http://localhost:3001/teams`);
            const teams = response.data;
            return dispatch({
                type: GET_TEAMS,
                payload: teams,
            });
        } catch (error){}
    };
}



export function filterByTeam(payload){
    return{
        type: "FILTER_BY_TEAM",
        payload
    }
}


export function filterByOrigin(payload){
    return{
        type: "FILTER_BY_ORIGIN",
        payload
    }
}


export function orderByName(payload){
    return{
        type: "ORDER_BY_NAME",
        payload
    }
}

export function orderByBirth(payload){
    return{
        type: "ORDER_BY_BIRTH",
        payload
    }
}


export const clearAll = (payload) => {
    return {
      type: "CLEAR_ALL",
      payload,
    };
  };

//   export const newTeams = (payload) => {
//     return {
//       type: "NEW_TEAMS",
//       payload,
//     };
//   };









