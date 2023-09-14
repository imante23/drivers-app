import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getDriverByName } from "../../redux/actions.js";
import "./searchbar.css";

const SearchBar = () => {
    const [nameToSearch, setNameToSearch] = useState("");
    const [showMessageNotFound, setShowMessageNotFound] = useState(false);

    const dispatch = useDispatch();

    const handleInput = (event) =>{
        // event.preventDefault();
        const inputValue = event.target.value;
        setNameToSearch(inputValue);
    }


    const handleSearch = () => {
    if(!nameToSearch){
        alert("Please write a valid name");
      } else {
        dispatch(getDriverByName(nameToSearch))
        .then((response) => {
          if(response.payload === 0){
            setShowMessageNotFound(true)
          } else {
            setShowMessageNotFound(false)
          }
        })
        .catch((error) => {
          setShowMessageNotFound(true)
        })
        setNameToSearch("");
      }
    };

      /* HANDLER PARA CAPTURAR EL ENTER */
    const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
    };


    return(
        <div className="search-bar">
        <input className="input-search" type="search" onChange={handleInput} value={nameToSearch} placeholder="Write any name..." onKeyDown={handleKeyDown} />
        <button className="butt" onClick={handleSearch}>Search</button>
        { showMessageNotFound && 
        <div className="filterbar-message">
          <div className="filterbar-arrowup"></div>
          <p>Driver not found. Please try a different name.</p>
        </div>}
        </div>

    );

}

export default SearchBar;


